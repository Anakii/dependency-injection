import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface Counter{
  counter:number;
  increace:()=>void
}

@Injectable()
export class CounterService implements Counter {
  counter: number = 0
  constructor(private http:HttpClient) { }
  public increace() {
    this.counter++
  }
}
