import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { inject } from '@angular/core/testing';
import { CounterService } from '../counter.service';

 function counterProvider(http:HttpClient):CounterService{
  return new CounterService(http)
}
const COUNTER_TOKEN:InjectionToken<CounterService> = new InjectionToken<CounterService>("CounterService");
@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
  providers:[
    {
      provide:COUNTER_TOKEN,
      useFactory:counterProvider,
      multi:true,
      deps:[HttpClient]
    },
  
  ]
})
export class ChildTwoComponent implements OnInit {

  constructor(
     @Inject(COUNTER_TOKEN)public counter:CounterService
  ) {
    console.log(this.counter);
    
   }

  ngOnInit() {
  }

}
