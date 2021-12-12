import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyTask } from '../myTask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id!: number;
  task: MyTask = new MyTask();

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.id);
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.taskService.getTaskById(this.id).subscribe( data => {
      this.task = data;
    })
    
  }

  onSubmit(){
    this.taskService.updateTask(this.id, this.task).subscribe( data => {
      this.goToTaskList();
    })
  }

  goToTaskList(){
    this.router.navigate(['/tasks']);
  }

}
