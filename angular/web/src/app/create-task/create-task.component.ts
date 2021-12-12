import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyTask } from '../myTask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: MyTask = new MyTask();

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTask(){
    this.taskService.createTask(this.task).subscribe( data => {
      console.log(data);
      this.goToTaskList();
    })
  }

  goToTaskList(){
    this.router.navigate(['/tasks']);
  }

  onSubmit(){
    console.log(this.task);
    this.saveTask();
  }

}
