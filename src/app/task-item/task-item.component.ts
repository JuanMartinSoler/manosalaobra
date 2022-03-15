import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task : any

  constructor() { }

  ngOnInit(): void {
  }

}
