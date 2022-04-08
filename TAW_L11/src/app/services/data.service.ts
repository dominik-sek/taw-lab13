import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  private url = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {
   }

   getAll(){
     return this.http.get(this.url + '/api/posts');
   }
   getById(id:string){
     return this.http.get(this.url + '/api/posts/' + id);
   }
  addOne(){
    return this.http.post(
      this.url + '/api/posts/',
        post:{

        }
      )
  }
}
