import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dependency-injection';
  constructor(private http:HttpClient){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe()
  }
}
