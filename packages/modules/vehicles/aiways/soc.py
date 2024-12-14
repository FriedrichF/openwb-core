#!/usr/bin/env python3
import logging

from modules.common import req
from modules.common.abstract_device import DeviceDescriptor
from modules.common.abstract_vehicle import VehicleUpdateData
from modules.common.component_state import CarState
from modules.common.configurable_vehicle import ConfigurableVehicle
from modules.vehicles.aiways.config import AiwaysVehicleSoc

log = logging.getLogger(__name__)


def fetch(vehicle_config: AiwaysVehicleSoc, vehicle_update_data: VehicleUpdateData) -> CarState:
    response = req.get_http_session().post(vehicle_config.configuration.condition_url, timeout=10,
                                           headers={"language": vehicle_config.configuration.language,
                                                    "registerid": vehicle_config.configuration.register_id,
                                                    "deviceid": vehicle_config.configuration.device_id,
                                                    "version": vehicle_config.configuration.version,
                                                    "platform": vehicle_config.configuration.platform,
                                                    "token": vehicle_config.configuration.token,
                                                    "apptimezone": vehicle_config.configuration.apptimezone,
                                                    "apptimezoneid": vehicle_config.configuration.apptimezoneid,
                                                    "content-type": vehicle_config.configuration.content_type,
                                                    "accept-encoding": vehicle_config.configuration.accept_encoding,
                                                    "user-agent": vehicle_config.configuration.user_agent},
                                           json={"userId": vehicle_config.configuration.user_id,
                                                 "vin": vehicle_config.configuration.vin}, verify=False)
    response.raise_for_status()
    json = response.json()
    soc = json['data']['vc']['soc']
    range = json['data']['vc']['drivingRange']
    soc_timestamp = json['data']['vc']['dataTimeTS']
    return CarState(soc, range, soc_timestamp)


def create_vehicle(vehicle_config: AiwaysVehicleSoc, vehicle: int):
    def updater(vehicle_update_data: VehicleUpdateData) -> CarState:
        return fetch(vehicle_config, vehicle_update_data)

    return ConfigurableVehicle(vehicle_config=vehicle_config,
                               component_updater=updater,
                               vehicle=vehicle,
                               calc_while_charging=False)


device_descriptor = DeviceDescriptor(configuration_factory=AiwaysVehicleSoc)
