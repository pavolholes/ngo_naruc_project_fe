import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  public selectedUser$: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  public user: UserModel = {_id: "", name: "", surname: "", email: "", role: ""};

  constructor(private http: HttpClient) { 
    this.selectedUser$.subscribe(selection => {
      this.user = selection;
    });

  }

  getUserList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}/ngo/user/show_users`);
  }

  deleteUser(user_id: string): Observable<UserModel> {
    return this.http.delete<UserModel>(`${this.baseUrl}/ngo/user/delete_user/${user_id}`);
  }

  updateUser(user_id: string, data:UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.baseUrl}/ngo/user/update_user/${user_id}`, data);
  }

  loginUser(data: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/ngo/user/login`, data);
  }

  postNewUser(body: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(`${this.baseUrl}/ngo/user/sign_in`, body);
  }

  changeUser(data: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.baseUrl}/ngo/user/update_user/${data._id}`, data);
  }

//   editClient(client: ClientModel): Observable<any> {
//     return this.http.put<any>(`${this.baseUrl}/ngo/client/update_client/${client._id}`, client);
//   }

//   getSelectedClient(): ClientModel {
//     return this.client;
//   }

//   getClientById(client_id: string): Observable<ClientModel> {
//     return this.http.get<ClientModel>(`${this.baseUrl}/ngo/client/get_client_info/${client_id}`);
//   }

//   postNewClient(body: ClientModel): Observable<ClientModel[]> {
//     console.log(body);
//     return this.http.post<ClientModel[]>(`${this.baseUrl}/ngo/client/add_new_client`, body);
//   }

}
