import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCateAdd, TypeCategory } from '../types/Cate';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient) { }
    getCategory(): Observable<TypeCategory[]>{
    return this.http.get<TypeCategory[]>(environment.categorys)
  }
 
  deleteProduct (id : string| number) : Observable<any> {
    return this.http.delete(`${environment.categorys}/${id}`)
  }
  //dl gửi đi {name : stirngg}, nhận về {id: number, name string}
  AddProduct(data : TypeCateAdd) : Observable<CategoryService>{
    return this.http.post<CategoryService>(`${environment.categorys}`, data)

  }
  EditProduct( id: number| string, data : TypeCateAdd) : Observable<CategoryService>{
    return this.http.patch<CategoryService>(`${environment.categorys}/edit/${id}`, data)

  }
}
