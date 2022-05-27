import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users : any;
  @Output() handleDelete: EventEmitter<number>
  @Output() handleEdit : EventEmitter<number>
  constructor() { 
    this.handleDelete = new EventEmitter(),
    this.handleEdit = new EventEmitter()

  }

  ngOnInit(): void {
  }

  onEdit(id : number) {
    this.handleEdit.emit(id)

  }
  onDelete(id: number){
    this.handleDelete.emit(id)
  }
}
