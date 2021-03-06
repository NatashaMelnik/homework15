import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClickservService } from '../../services/clickserv.service';

@Component({
  selector: 'app-tablepagin',
  templateUrl: './tablepagin.component.html',
  styleUrls: ['./tablepagin.component.scss'],
})
export class TablepaginComponent implements OnInit {
  tableData = [];
  p = 1;
  collection = [];

  constructor(private clickserv: ClickservService) {}

  ngOnInit(): void {
    this.tableData = this.clickserv.GetPags();
    this.collection = this.tableData;
  }

}
