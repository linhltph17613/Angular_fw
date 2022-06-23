import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCateAdd, TypeCategory } from '../types/Cate';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategory(): Observable<TypeCategory[]> {
    return this.http.get<TypeCategory[]>(environment.categories)
  }
  getOneCate(id: string): Observable<any> {
    return this.http.get<any>(`${environment.categories}/${id}`)
  }

  deleteCate(id: string | number): Observable<any> {
    return this.http.delete(`${environment.categories}/${id}`)
  }
  //dl gửi đi {name : stirngg}, nhận về {id: number, name string}
  AddCate(data: TypeCateAdd): Observable<TypeCategory> {
    return this.http.post<TypeCategory>(`${environment.categories}`, data)

  }
  // EditCate(id: string, data: TypeCateAdd): Observable<TypeCategory> {
  //   return this.http.put<TypeCategory>(`${environment.categorys}/${id}`, data)

  // }
  EditCate(id: number |string, data: TypeCateAdd): Observable<TypeCategory> {
    return this.http.patch<TypeCategory>(`${environment.categories}/${id}`, data)

  }
}
