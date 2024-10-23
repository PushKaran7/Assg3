import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})



export class TaskListComponent {

  tasks:Task []=[
    { id: 1, title: 'create Task managment #101', type: 'urgent', statusval: 'pending' },
    { id: 2, title: 'Go watch a Movie', type: 'normal', statusval: 'pending' },
    { id: 3, title: 'Fix bug #101', type: 'urgent', statusval: 'pending' },
    { id: 4, title: 'Design new feature', type: 'normal', statusval: 'pending' },
    { id: 5, title: 'Prepare report', type: 'low', statusval: 'pending' }
  ];

  @Output() taskCompleted:EventEmitter<Task> =new EventEmitter<Task>();

  completeTask(task:Task):void{
    task.statusval='complete';
    this.taskCompleted.emit(task);
  }
}
export interface Task{
  id:number,
  title:string,
  type:string,
  statusval:string
}

