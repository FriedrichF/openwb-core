from common.abstract_vehicle import VehicleUpdateData
from vehicles.aiways.config import AiwaysVehicleSoc, AiwaysVehicleSocConfiguration
from vehicles.aiways.soc import create_vehicle


class TestAiways:
    def test_soc(self):
        create_vehicle(AiwaysVehicleSoc(
            configuration=AiwaysVehicleSocConfiguration(user_id="627734990727936", vin="LVXMAXBA4LR901320",
                                                        device_id="1A04747F-94F6-442D-976D-DFA9AA6F6D2C",
                                                        register_id="c2IoZ9psVEmpsZ4HZB53B3:APA91bETZzq1Of1wgKvpdvNyy20vVLLFwRReC7fskxqjpURHQzKxWD60ixBYuO0KYFsupRPG11R1ARedkTyx_ef5qzbvrqcDkdYQskzcP5aGpU1zv3XeNcY0I2IoKv4Wo2ai-t7UI-Fd",
                                                        token="GDJKHJ31I169_17ON0MONOQUPUYvSZTvvqyZivuusiigoh",
                                                        condition_url="https://coiapp-api-eu.ai-ways.com:10443/app/vc/getCondition")),
            0).update(VehicleUpdateData())
