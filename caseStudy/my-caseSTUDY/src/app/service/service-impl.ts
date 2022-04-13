import {Injectable} from '@angular/core';
import {Service} from './list-service/service';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
}

)
export class ServiceImpl {
  API_URL : 'http://localhost:3000/service';
  constructor(private  http: HttpClient) {
  }
  getAll(){
    return this.http.get<Service[]>(this.API_URL).subscribe();
  }
}
