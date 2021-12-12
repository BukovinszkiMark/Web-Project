import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyTask } from '../myTask'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: MyTask[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(){
    this.taskService.getTaskList().subscribe(data => {
      this.tasks = data;
    });
  }

  updateTask(id: number){
    this.router.navigate(['update-task', id]);
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe( data => {
      this.getTasks();
    })
  }

}
