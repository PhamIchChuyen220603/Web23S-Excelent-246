import { CollaborativeEditArgs, Spreadsheet } from '@syncfusion/ej2-angular-spreadsheet';
import { environment } from './../env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDoc,
  setDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  collectionGroup,
} from '@angular/fire/firestore';
import { File } from '../model/file.model';
import { Observable } from 'rxjs';

//SocketIO
import {Socket} from 'ngx-socket-io'
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private fireStore: Firestore, private http: HttpClient, private socket: Socket) {}
  public idToDelete!: string;
  public idToUpdate!: string;
  public idParam!: string;
  currentFile!: any;
  isSelected!: boolean;
  // so:Socket = this.socket;
  currentUserId!: string

  db = collection(this.fireStore, 'excelFiles');
  db2 = getFirestore();


  addSheet(file:File){
    setDoc(doc(this.db, file.fileId), file);
  }

  updateSheet(file:File, fileId:string){
    setDoc(doc(this.db, fileId), {
      fileId: fileId,
      ownerId: file.ownerId,
      title: file.title,
      createdDate: file.createdDate,
      modifiedDate: file.modifiedDate,
      modifiedBy: file.modifiedBy,
      createdBy: file.createdBy,
      status: file.status,
      data: file.data,
      members: file.members,
    });

  }

  getDataByFileId(fileId: string){
    console.log('join-' + fileId);
    const channel = 'message-' + fileId;
    return this.socket.fromEvent(channel);
  }

  sendDataByFileId(fileId: string, data: any){
    this.socket.emit('message', {fileId: fileId, data: data});
    console.log(data);
  }


  openFile(sheet: Spreadsheet, file: any) {
    sheet.openFromJson(file);
  }

  getAllFiles() {
    return this.http.get(`${environment.baseUrl}file/getAll`) as Observable<File[]>;
  }


  getFileById(id: string) {
    return this.http.get(`${environment.baseUrl}file/get?id=${id}`) as Observable<File>;
  }

  getFilesByOwner(ownerId: string) {
    return this.http.get(
      `${environment.baseUrl}file/getByUser?id=${ownerId}`
    ) as Observable<File[]>;
  }

  getFilesByMember(memberId: string) {
    return this.http.get(
      `${environment.baseUrl}file/getByMember?id=${memberId}`
    ) as Observable<File[]>;
  }

  deleteById(id: string){
    return this.http.delete(`${environment.baseUrl}file/delete?id=${id}`)
  }

  updateById(id: string, file: File){
    return this.http.put(`${environment.baseUrl}file/update?id=${id}`, file);
  }

  createFile(file: File) {
    return this.http.post(`${environment.baseUrl}file/create`,file);
  }



  // deleteFileById(fileId: string) {
  //   return this.http.delete(
  //     `${environment.baseUrl}file/delete?id=${fileId}`
  //   ) as Observable<File[]>;
  // }

  getFilesByDate(){
    return this.http.get(`${environment.baseUrl}file/getFilesByDate` ) as Observable<File[]>;
  }

  getFilesByTitle(){
    return this.http.get(`${environment.baseUrl}file/getFilesByTitle` ) as Observable<File[]>;
  }
}
