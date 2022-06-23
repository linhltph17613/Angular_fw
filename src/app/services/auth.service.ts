import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeRegisterRequest, TypeUser } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.login, data)
  }
  register(data: TypeRegisterRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.register, data)
  }
  Listusers(): Observable<TypeLoginRequest[]> {
    return this.http.get<TypeLoginRequest[]>(environment.users)
  }
  getUser(id: string): Observable<TypeLoginRequest> {
    return this.http.get<TypeLoginRequest>(`${environment.users}/${id}`)
  }
  deleteUser(id: string | number): Observable<any> {
    return this.http.delete(`${environment.users}/${id}`)
  }
  //dl gửi đi {name : stirngg}, nhận về {id: number, name string}
  AddUser(data: TypeLoginRequest): Observable<TypeLoginRequest> {
    return this.http.post<TypeLoginRequest>(`${environment.users}`, data)

  }
  EditUser(id: string, data: TypeUser): Observable<TypeLoginRequest> {
    return this.http.put<TypeLoginRequest>(`${environment.users}/edit/${id}`, data)

  }
}
