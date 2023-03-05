import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invitation } from '../model/invitation.model';
import { environment } from '../env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private http: HttpClient) {}

  send(invitation: Invitation){
    return this.http.post(`${environment.baseUrl}invitation/send`, invitation);
  }

  get(id: string){
    return this.http.get(`${environment.baseUrl}invitation/get/${id}`) as Observable<Invitation[]>;
  }

  accept(idUser: string, idFile: string){
    return this.http.put(`${environment.baseUrl}invitation/accept/${idUser}/${idFile}`,{});
  }

  reject(idInvitation: string){
    return this.http.delete(`${environment.baseUrl}invitation/reject/${idInvitation}`);
  }
}
