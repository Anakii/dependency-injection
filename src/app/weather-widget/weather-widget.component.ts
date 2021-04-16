import { Component, OnInit } from '@angular/core';
import { Iwidget, WIDGET } from '../widget/Iwidget';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
      multi: true
    }
  ]
})
export class WeatherWidgetComponent implements Iwidget {
  compName: string = 'Weather widget';

  refresh(): void {
    console.log("WeatherWidgetComponent");
  }
}
