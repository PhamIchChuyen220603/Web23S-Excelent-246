import { Spreadsheet } from '@syncfusion/ej2-angular-spreadsheet';
import { environment } from './../env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
} from '@angular/fire/firestore';
import { File } from '../model/file.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private fireStore: Firestore, private http: HttpClient) {}
  currentFile!: any;
  // spreadSheetObj!: Spreadsheet

  db = collection(this.fireStore, 'excelFiles');

  openFile(sheet: Spreadsheet, file: any) {
    sheet.openFromJson(file);
  }

  getAllFiles() {
    // this.currentFile = this.http.get(`${environment.baseUrl}file/getAll`);
    return this.http.get(`${environment.baseUrl}file/getAll`) as Observable<File[]>;
  }

  getFileById(id: string) {
    return this.http.get(
      `${environment.baseUrl}file/get?id=${id}`
    ) as Observable<File>;
  }

  getFilesByOwner(ownerId: string) {
    return this.http.get(
      `${environment.baseUrl}file/getByUser?id=${ownerId}`
    ) as Observable<File[]>;
  }

  getFilesByMember(memberId: string) {
    return this.http.get(`${environment.baseUrl}file/getByMember?id=${memberId}`) as Observable<File[]>;
  }

  async createFile(file: File) {
    return setDoc(doc(this.db), file);
  }

  async updateFile(file: File) {
    let tmp = Date.now();
    console.log(file);
    return await addDoc(this.db, file);
  }

  async getSheet(id: string) {
    console.log(id);
    return (await getDoc(doc(this.db, id))).data();
  }
}
