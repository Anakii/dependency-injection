import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  providers:[CounterService]
})
export class ChildOneComponent implements OnInit {

  constructor(@Self() public counter:CounterService) { }

  ngOnInit() {
  }

}
