import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {WeatherInterceptor} from "./weather-interceptor.service";

const routes: Routes = [{ path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherInterceptor,
      multi: true, // Token utilisé pour toutes les requêtes
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
