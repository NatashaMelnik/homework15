import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClickservService } from '../../services/clickserv.service';

@Component({
  selector: 'app-tablepagin',
  templateUrl: './tablepagin.component.html',
  styleUrls: ['./tablepagin.component.scss'],
})
export class TablepaginComponent implements OnInit {
  // @ViewChild('table-body') tableBody: ElementRef;
  // this.tableBody.nativeElement.innerHTML
  tableData = [];
  page = 1;
  pageSize = 10;
  state = {
    querySet: this.tableData,
    page: 1,
    rows: 5,
    window: 5,
  };

  constructor(private clickserv: ClickservService) {}

  ngOnInit(): void {
    this.tableData = this.clickserv.GetPags();
    // console.log(this.tableData);
    // this.buildTable();
  }


}
