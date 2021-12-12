import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyTask } from './myTask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = "http://localhost:8080/api/v1/tasks";

  constructor(private httpClient: HttpClient) { }

  getTaskList(): Observable<MyTask[]> {
    return this.httpClient.get<MyTask[]>(`${this.baseURL}`);
  }

  createTask(task: MyTask): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, task);
  }

  getTaskById(id: number): Observable<MyTask>{
    return this.httpClient.get<MyTask>(`${this.baseURL}/${id}`);
  }

  updateTask(id: number, task: MyTask): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }

  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
