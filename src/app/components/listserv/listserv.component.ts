import { Component, OnInit, NgModule } from '@angular/core';
import { ClickservService } from '../../services/clickserv.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listserv',
  templateUrl: './listserv.component.html',
  styleUrls: ['./listserv.component.scss'],
})
export class ListservComponent implements OnInit {
  titles;

  constructor(private titleServ: ClickservService) {}

  ngOnInit(): void {
    let todos = this.titleServ.GetTodos();
    this.titles = todos;
    this.GetTitles(this.titles);
  }

  public GetTitles(arr) {
    let temp = arr.forEach((obj) => {
      delete obj.id;
    });
    return temp;
  }

  Search(str) {
    if (str !== '') {
      this.titles = this.titles.filter((res) => {
        return res.title.toLowerCase().match(str.toLowerCase());
      });
    } else if (str === '') {
      this.ngOnInit();
    }
  }

}
