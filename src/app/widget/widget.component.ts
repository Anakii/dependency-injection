import { Component, ContentChild, OnInit } from '@angular/core';
import { Iwidget, WIDGET } from './Iwidget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @ContentChild(WIDGET, { static: true }) widget: Iwidget;
  constructor() { }

  ngOnInit() {
  }
  onRefresh() {
    this.widget.refresh()
  }
}
