import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as moment from 'moment';
import { config } from 'rxjs';

@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class WeeklyScheduleComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.Config);
    this.row = this.getRows();
  }
  @Input()
  public Config: Config;
  public row: row[] = [];
  ngOnInit(): void {


  }
  getRows(): row[] {
    if (this.Config == null)
      return;

    let rows: row[] = [];
    var n: number = 0;
    var numberofdays = 60;
    var pairs = this.getPairs();
    console.log("Pairs : ");
    console.log(pairs);
    while (n <= 60
    ) {
      let nn = false;

      for (let i = 0; i < (pairs.length/2); i++) {
        var d = moment().add(n, 'days').format('dddd');
        if (d == "Saturday" || d == "Sunday") {
          n += 1;
          continue;
        }
let row1:row = {
  Date: moment().add(n, 'days').format("dd- DD/MM/YYYY"),
  FirstName: pairs[i].FirstName, SecondName: pairs[i].SecondName
}; 
let row2:row = {
  Date: moment().add(n, 'days').format("dd- DD/MM/YYYY"),
  FirstName: pairs[pairs.length-1-i].FirstName, SecondName: pairs[pairs.length-1-i].SecondName
}; 
        rows.push(row1);
        rows.push(row2);
        n = n + 1;
        if (nn) {
        
          nn = false;
        }
        else
          nn = true;
      }




    }
    return rows;
  }

  getPairs(): row[] {
    let rows: row[] = [];
    let total = this.Config.names.length;
    for (let i = 0; i <= (total - 1); i++) {
      for (let j = i; j <= (total - 1); j++) {
        if (i == j)
          continue;

        rows.push({
          Date: moment().format("dd- DD/MM/YYYY"),
          FirstName: this.Config.names[i], SecondName: this.Config.names[j]
        });



      }

    }
    return rows;
  }


}


export class row {
  public Date: string;
  public FirstName: string;
  public SecondName: string;
}

export class Config {
  public EndDate: Date;
  public names: string[];
}
