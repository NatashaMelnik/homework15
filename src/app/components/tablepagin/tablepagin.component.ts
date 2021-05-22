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
  public page = 1;
  public pageSize = 5;
  p: number = 1;
  collection: any[]; 
  state = {
    querySet: this.tableData,
    page: 1,
    rows: 5,
    window: 5,
  };

  constructor(private clickserv: ClickservService) {}

  ngOnInit(): void {
    this.tableData = this.clickserv.GetPags();
    this.collection = this.tableData;
    // console.log(this.tableData);
    // this.buildTable();
  }


}
