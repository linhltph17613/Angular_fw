import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  inPutValue = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    img: ''
  }
  users = [
    {
      id : 1,
      name : 'linhciute',
      age : 30,
      email : 'linh@gmail.com',
      img : '',
      sdt: '0359582'
    },
    {
      id : 10,
      name : 'huongciute',
      age : 30,
      email : 'huong@gmail.com',
       img : '',
      sdt: '0359582'
    }
  ]
  onDelete(userId : number){
    this.users = this.users.filter(user => user.id !== userId)
  }
  onEdit(id : number) {
    //tìm user có id là id truyền vào 
    const editUser  = this.users.find((user => user.id === id))
    //2.Nếu tìm ra mới gán giá trị nên form
    if(editUser) {
      this.inPutValue = {...editUser}
    }
  }
  onSubmit(userForm : NgForm) {
    // console.log(userForm);
    //1.Tìm ra id lớn nhất
    const userIds = this.users.map(user => user.id).sort((a,b) => a - b)
    console.log(userIds);


    const newId = userIds[userIds.length - 1]

    if(this.inPutValue.id == 0){

      //2.Thêm vào mảng
      this.users.push({
        ...userForm.value,
         id:  newId + 1
      })
    }else {
      const idx = this.users.findIndex((user) => user.id === this.inPutValue.id)
      if(idx > -1) {
        this.users[idx] = {
          ...userForm.value,
          id : this.inPutValue.id
        }
      }
      

    }

    //3. Cập nhật lại gtri ban đầu 
    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      img: ''
    })
  }

}
