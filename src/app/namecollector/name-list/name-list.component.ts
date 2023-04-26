import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { List } from 'linqts';
import { NamesModel } from '../NamesModel';
import { Config, WeeklyScheduleComponent } from '../weekly-schedule/weekly-schedule.component';
@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
  standalone: true,
  imports: [SharedModule, WeeklyScheduleComponent],
})
export class NameListComponent implements OnInit, OnChanges {

  @ViewChildren("inputtext") panes!: QueryList<ElementRef>;
  addNew() {
    this.fullnames.push("");
    setTimeout(() => {
      this.panes.last.nativeElement.focus();
    }, 250);
   
  }
  constructor() {


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {

  }

  @Input()
  private _fullnames: string[] = [""];
  public get fullnames(): string[] {
    return this._fullnames;
  }
  public set fullnames(value: string[]) {
    this._fullnames = value;
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  generateTable() {
    this.config = { EndDate: new Date(), names: this.fullnames }
    console.log(this.config);
  }
  public config: Config;

  movefocus($event) {
    console.log($event);
  }
}
