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
    this.userService.GetUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
