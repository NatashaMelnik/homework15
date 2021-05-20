import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  public GetUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}