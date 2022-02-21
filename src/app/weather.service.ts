import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { MainWeatherDTO } from './models/MainWeatherDTO';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<MainWeatherDTO> {
    return this.http
      .get<MainWeatherDTO>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}`
      )
  }
}
