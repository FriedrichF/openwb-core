from typing import Optional


class AiwaysVehicleSocConfiguration:
    def __init__(self, user_id: Optional[str] = None, vin: Optional[str] = None, device_id: Optional[str] = None,
                 register_id: Optional[str] = None, token: Optional[str] = None,
                 condition_url: Optional[str] = "https://coiapp-api-eu.ai-ways.com:10443/app/vc/getCondition") -> None:
        self.user_id = user_id
        self.vin = vin
        self.device_id = device_id
        self.register_id = register_id
        self.token = token
        self.condition_url = condition_url

        # these values should "never" change
        self.language = "de"
        self.version = "1.3.0"
        self.platform = "iOS"
        self.apptimezone = "MEZ"
        self.apptimezoneid = "Europe/Berlin"
        self.content_type = "application/json; charset=utf-8"
        self.accept_encoding = "gzip"
        self.user_agent = "okhttp/4.3.1"


class AiwaysVehicleSoc:
    def __init__(self,
                 name: str = "Aiways SoC module",
                 type: str = "aiways",
                 configuration: AiwaysVehicleSocConfiguration = None) -> None:
        self.name = name
        self.type = type
        self.configuration = configuration or AiwaysVehicleSocConfiguration()
