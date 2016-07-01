import { Component, OnInit } from '@angular/core';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'site',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES],
  templateUrl: 'site.component.html',
  styleUrls: ['site.component.css']
})
export class SiteComponent implements OnInit {
  public dt:Date = new Date();
  private minDate:Date = null;
  private events:Array<any>;
  private tomorrow:Date;
  private afterTomorrow:Date;
  private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];
  private dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;

  constructor() {}

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  ngOnInit() {

  }

}
