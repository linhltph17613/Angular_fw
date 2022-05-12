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
      id: '1',
      name: 'linhlt',
      age: 30,
      gender: 0,
      avatar: "https://i.imgur.com/rYWKRva.jpg",
      status: 0
    },
    
      {
      id: '2',
      name: 'dattd',
      age: 35,
      gender: 1,
      avatar: "https://i.imgur.com/rYWKRva.jpg",
      status: 1
    },
    {
      id: '3',
     name: 'tuanntd',
      age: 30,
      gender: 1,
      avatar: "https://i.imgur.com/rYWKRva.jpg",
      status: 1
    },
    {
        id: '4',
     name: 'thuynt',
      age: 25,
      gender: 0,
      avatar: "https://i.imgur.com/rYWKRva.jpg",
      status: 1
    }

  ]
  studentName = 'lê thị linh'
  studentId = 'PH17613s'
}
