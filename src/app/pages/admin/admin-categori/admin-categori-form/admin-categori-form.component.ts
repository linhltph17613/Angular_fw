import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categori-form',
  templateUrl: './admin-categori-form.component.html',
  styleUrls: ['./admin-categori-form.component.css']
})
export class AdminCategoriFormComponent implements OnInit {
  cateForm: FormGroup;
  cateId: string;

  constructor(
    private cateService: CategoryService,//các pthuc call api
    private router: Router,//điều hướng,
    private activeRoute: ActivatedRoute //lấy tham số trên url 
  ) {
    this.cateForm = new FormGroup({
      // name : new FormControl('', Validators.required)  //form control(giấ trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]), //form control(giấ trị mặc định)


    })
    this.cateId = ''
  }

  ngOnInit(): void {
    this.cateId = this.activeRoute.snapshot.params['id']
    console.log(this.cateId);
    if (this.cateId) {
      this.cateService.getOneCate(this.cateId).subscribe(data => {
        console.log(data);
        const {category} = data
        //cập nhật data cho form 
        this.cateForm.patchValue({
          name: category.name,
          status: 1
        })
      })
    }

  }

  redirectToList() {
    this.router.navigateByUrl('/admin/category');

  }

  onSubmit() {
    console.log(this.cateForm.value);
    //1. Nhận dl từ form => this.cateForm.value
    const data = this.cateForm.value
    if (this.cateId) {
      return this.cateService.EditCate(this.cateId, data).subscribe(data => {
        console.log(this.cateId);
        alert('Sửa thành công!')

        this.redirectToList();
      })
    }
    // 2. call api 
    return this.cateService.AddCate(data).subscribe(data => {
      console.log(data);
      //3. ql ds products
      alert('Thêm thành công!')
      this.redirectToList()

      //3.1 khi đã quay về list thì ngOnInnit trong list trong list sẽ lại được chạy và call api
      //Lấy ds mới 
    })
  }

}

