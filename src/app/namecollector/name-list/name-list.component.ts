import { Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { List } from 'linqts';
import { NamesModel } from '../NamesModel';
import { Config, WeeklyScheduleComponent } from '../weekly-schedule/weekly-schedule.component';
@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
  standalone: true,
  imports: [SharedModule,WeeklyScheduleComponent],
})
export class NameListComponent implements OnInit {
  
  @ViewChildren( "input") panes!: QueryList< ElementRef>;
addNew( ) {
this.fullnames.push("")
  var a =  this.panes.last.nativeElement.focus () ; 
}
  constructor() {
   
     
  }

  ngOnInit() {
   
  }

  @Input()
  public fullnames: string[] = [""]; 
  @Input() namesList = new NamesModel()
  trackByFn(index: any, item: any) {
    return index;
  }
  generateTable() {
this.config = { EndDate: new Date() , names : this.fullnames}
console.log(this.config);
  }
 public config:Config ; 
}
