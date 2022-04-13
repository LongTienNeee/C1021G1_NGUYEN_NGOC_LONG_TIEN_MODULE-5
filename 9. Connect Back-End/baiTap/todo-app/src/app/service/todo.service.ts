import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../todo';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL : "http://localhost:3000/todo"
  constructor(private http: HttpClient) { }

  getAll():Observable<Todo[]>{
    console.log('797878y8hg');
    return this.http.get<Todo[]>(this.API_URL);
  }

  delete(id:number) : void{
    this.http.delete<Todo>(this.API_URL);
  }

  addNew(data: Todo): void{
    this.http.post<Todo>(this.API_URL, data);
  }
}
