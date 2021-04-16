import { Component, OnInit } from '@angular/core';
import { Iwidget, WIDGET } from '../widget/Iwidget';

@Component({
  selector: 'app-jira-widget',
  templateUrl: './jira-widget.component.html',
  styleUrls: ['./jira-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: JiraWidgetComponent,
      multi: true
    }
  ]
})
export class JiraWidgetComponent implements Iwidget {
  compName: string = 'Jira widget';

  refresh(): void {
    console.log("JiraWidgetComponent refreshing");
  }

}
