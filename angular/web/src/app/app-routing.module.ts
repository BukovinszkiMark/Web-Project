import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent},
  {path: 'create-task', component: CreateTaskComponent},
  {path: 'update-task/:id', component: UpdateTaskComponent},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
