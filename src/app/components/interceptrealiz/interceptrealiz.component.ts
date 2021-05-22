import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interceptrealiz',
  templateUrl: './interceptrealiz.component.html',
  styleUrls: ['./interceptrealiz.component.scss'],
})
export class InterceptrealizComponent implements OnInit {
  constructor(_http: HttpClient) {
    // _http.get('https://github.com/NatashaMelnik').subscribe((result) => {
      // console.log(result);
    // });
  }

  ngOnInit(): void {}
}
