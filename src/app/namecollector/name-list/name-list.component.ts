import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
  standalone: true,
})
export class NameListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  public fullnames: string[];
}
