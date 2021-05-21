import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  link = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public GetUsers(){
    return this.http.get(this.link);
  }

}
