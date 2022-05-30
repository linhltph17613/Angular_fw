import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    img: '',
    sdt: ''
  }
  users = [
    {
      id : 1,
      name : 'linhciute',
      age : 30,
      email : 'linh@gmail.com',
      img : 'https://picsum.photos/50/50',
      sdt: '0359582'
    },
    {
      id : 3,
      name : 'trangciute',
      age : 30,
      email : 'trang@gmail.com',
       img : 'https://picsum.photos/50/50',
      sdt: '0359582'
    },
    {
      id : 10,
      name : 'huongciute',
      age : 30,
      email : 'huong@gmail.com',
       img : 'https://picsum.photos/50/50',
      sdt: '0359582'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  onEdit(id: number){
    //1.Tìm đâu là user đc chỉnh sửa 
       const editUser  = this.users.find((user => user.id === id))
    //2.Nếu tìm ra mới gán giá trị nên form
    if(editUser) {
     return this.formValues = {...editUser}
    } 
    return alert('Không tìm thấy user đó!')
  }
  
  onParentDelete(id: number){
    this.users = this.users.filter(user => user.id !== id)

}
  onParentSubmit(formData : any){
   const userIds = this.users.map(user => user.id).sort((a,b) => a - b)
    console.log(userIds);


    const newId = userIds[userIds.length - 1]

    if(this.formValues.id == 0){

      //2.Thêm vào mảng
      this.users.push({
        ...formData, //giá trị con truyền sang
         id:  newId + 1
      })
    }else {
      const idx = this.users.findIndex((user) => user.id === this.formValues.id)
      if(idx > -1) {
        this.users[idx] = {
          ...formData,
          id : this.formValues.id
        }
      }
      

    }

  }

}
