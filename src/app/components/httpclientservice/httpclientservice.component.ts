import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-httpclientservice',
  templateUrl: './httpclientservice.component.html',
  styleUrls: ['./httpclientservice.component.scss'],
})
export class HttpclientserviceComponent implements OnInit {
  public users;

  constructor(private userService: HttpserviceService) {}

  ngOnInit(): void {
    console.log('in HttpclientserviceComponent');
    this.userService.GetUsers().subscribe((res) => {
      this.users = res;
      console.log(res);
      console.log(this.users);
    });
    // console.log(this.users);
  }
}
