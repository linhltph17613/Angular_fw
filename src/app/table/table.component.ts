import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //@Input() students : any;
  //Nhận vào với tên là users
  //Nhưng lại gán gtrij ...
@Input('users') students : any;
  constructor() { }

  ngOnInit(): void {
  }

}
