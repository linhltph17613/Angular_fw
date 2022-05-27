import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  //1. định nghĩa sự kiện để bắn gtri  ngc lại 
  @Input() inPutValue: any;
  @Output() handleSubmit: EventEmitter<any>;
  constructor() {
    //2.Khâi báo gtri default
    this.handleSubmit = new EventEmitter()
   }

  ngOnInit(): void {
  }
 

   onSubmit(userForm : NgForm) {
    // 3. Gửi dl đi
    // console.log(userForm);
    this.handleSubmit.emit(userForm.value)
    

    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      img: ''
    })
  }


}
