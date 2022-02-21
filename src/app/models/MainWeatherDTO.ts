import { CloudsDTO } from "./CloudsDTO";
import { CoordDTO } from "./CoordDTO";
import { MainDTO } from "./MainDTO";
import { SysDTO } from "./SysDTO";
import { WeatherDTO } from "./WeatherDTO";
import { WindDTO } from "./WindDTO";

export interface MainWeatherDTO {
  coord: CoordDTO;
  weather: WeatherDTO[];
  base: string;
  main: MainDTO;
  visibility: number;
  wind: WindDTO;
  clouds: CloudsDTO;
  dt: number;
  sys: SysDTO;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
