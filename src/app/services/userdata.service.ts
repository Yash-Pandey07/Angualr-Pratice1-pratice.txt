import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint='https://jsonplaceholder.typicode.com/posts'; //Pagenation

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url="http://localhost:3000/friends";
  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url)
  }
  // users(){
  //     return[
  //       {name:'A',age:22,email:'a@test.com'},
  //       {name:'B',age:26,email:'b@test.com'},
  //       {name:'C',age:29,email:'c@test.com'}

  //     ]
  // }

  getAllPost(): Observable<any>{
    return this.http.get(endpoint);
  }
}
