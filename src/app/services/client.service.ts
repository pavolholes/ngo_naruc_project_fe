import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl: string = environment.baseUrl;

  public selectedClient$: EventEmitter<ClientModel> = new EventEmitter<ClientModel>();
  public client: ClientModel = {_id: "", name: "", surname: "", last_phase: 1, registration_date: new Date(), active: true};

  constructor(private http: HttpClient) { 
    this.selectedClient$.subscribe(selection => {
      this.client = selection;
    });

  }

  getClientsList(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.baseUrl}/ngo/client/show_clients`);
  }

  getSelectedClient(): ClientModel {
    return this.client;
  }
}