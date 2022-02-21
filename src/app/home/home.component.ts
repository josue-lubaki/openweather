import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {debounceTime, distinctUntilChanged, filter, fromEvent, map, retry, switchMap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  city?: string;
  weatherCity?: any;

  constructor(private weatherService: WeatherService) {
  }

  getWeather(city: string) {
      this.weatherService.getWeather(encodeURI(this.city!)).subscribe((data) => {
        this.weatherCity = data;
      });
  }

  ngOnInit(): void {
    const searchBox = document.getElementById('search-box');

    const typeahead = fromEvent(searchBox!, 'input')
      .pipe(map((e: any) => e.target.value), // transfome en observable de chaine de char
      filter(text => text.length > 2), // plus de deux caractères
      debounceTime(10), // prevenir ecriture effacement rapide
      distinctUntilChanged(), // prevenir écriture effacement du même caractère
      switchMap(() => this.weatherService.getWeather(this.city!)) // Swtich to new observable and cancel previous
    ).pipe(retry(3));

    typeahead.subscribe((data) => {
        this.weatherCity = data;
      })
  }
}
