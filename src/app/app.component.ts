import { Component } from '@angular/core';
import { Task } from './task/task-list/task-list.component';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})

export class AppComponent {
  title = 'todo-list';
 
  completedTasks:Task[]=[];

  onCompletion(task:Task):void{
    this.completedTasks.push(task);
  }
 
 
}
