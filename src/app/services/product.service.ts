import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct, ProductAdd } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //Khai báo http đểcó đối tượng HttpClient tương tác với các phương thức của api
  constructor (private http: HttpClient) { }

  //Kiểu dl observable sẽ giúp lắng nghe api trả về kg
  ListProducts (): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.products)
  }
  getProduct (id : string ): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.products}/${id}`)
  }
  deleteProduct (id : string| number) : Observable<any> {
    return this.http.delete(`${environment.products}/${id}`)
  }
  //dl gửi đi {name : stirngg}, nhận về {id: number, name string}
  AddProduct(data : ProductAdd) : Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.products}`, data)

  }
  EditProduct( id: number| string, data : ProductAdd) : Observable<IProduct>{
    return this.http.patch<IProduct>(`${environment.products}/edit/${id}`, data)

  }
}
