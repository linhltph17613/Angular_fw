import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we04';

  //phần logic  , định nghĩa gtri biến và sd ở html
  name = 'linhxinhgai';
  class = 'web16304';


  //kiểu dl mảng 
  students = [
    {
      id: 1,
      name: 'linhlt',
      age: 30,
      gender: 0,
      avatar: "https://picsum.photos/50/50",
      status: 0
    },
    
      {
      id: 2,
      name: 'dattd',
      age: 35,
      gender: 1,
      avatar: "https://picsum.photos/50/50",
      status: 1
    },
    {
      id: 3,
     name: 'tuanntd',
      age: 30,
      gender: 1,
      avatar: "https://picsum.photos/50/50",
      status: 1
    },
    {
        id: 4,
     name: 'thuynt',
      age: 25,
      gender: 0,
      avatar: "https://picsum.photos/50/50",
      status: 1
    }

  ]
  studentName = 'lê thị linh'
  studentId = 'PH17613s'


  //định nghĩa hàm khi cick vào thẻ h1 ở file html
  // schoolName : boolean = false
  schoolName = true

  ClickH1() {
    console.log('đã click vào h1')
    this.schoolName = !this.schoolName
  }

  //Định nghĩa hàm khi thay đổi nội dung input
  inputValue = 'linhlt'
  InputChange(e : any) {
    this.inputValue = e.target.value
  }

  //ĐỊnh nghĩa hàm nhận gtri từ các input
  inputValueTeacher = {
    name : '', //đang có ở input
    age: '', //đang có ở input nhưng là chuỗi 
    gender: '0',
    avatar : '',
    status : ''

  };
  // onInput(event : any, info: string ) {
  //  this.inputValues.name =  event.target.value, info;
  // }


  // onInputAge(event : any, info: string) {
  //  this.inputValues.age =  event.target.value, info;

  // }
  onInput(event : any, key: 'name'|'age'|'avatar'|'gender'|'status') {
   this.inputValueTeacher[key] =  event.target.value;
  }
  // Sự kiện click vào nút submit ở bên form
  onSubmit() {
    console.log(this.inputValueTeacher);
    //Thêm dl vừa thao tác ở form vào teacher
    this.students.push({
      ...this.inputValueTeacher, 
      age : +this.inputValueTeacher.age, //đưa age từ chuỗi input về số
      gender : +this.inputValueTeacher.gender,
      status : 0,
      id : this.students.length + 1,

    })
    //Cập nhật lại  gtri cho input ở form
    this.inputValueTeacher = {
      name : '',
      age : '',
      avatar : '',
      gender: '0',
    status : ''
    }

  }
}
