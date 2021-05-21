import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Несколько сервисов для запросов. Некоторые сразу, а некоторые по клику.

export class ClickservService {

  // constructor(private http: HttpClient) { }

  // public GetUsers(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }

}
