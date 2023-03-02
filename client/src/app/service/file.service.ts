import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { File } from '../model/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private fireStore: Firestore) {}

  db = collection(this.fireStore, 'excelFiles');

  async createFile(file: File){
    return await setDoc(doc(this.db), file);
  }

  async updateFile(file: File){
    let tmp = Date.now();
    console.log(file);
    return await addDoc(this.db,file);
  }

  async getSheet(id: string){
    console.log(id);
    return (await getDoc(doc(this.db, id))).data();
  }

  fileArr = [
    {
      fileId: '1',
      ownerId: 'owner1',
      createdDate: 123,
      modifiedDate: 123,
      modifiedBy: 'owner123',
      createdBy: 'owner',
      title: 'Empty',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 456,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'owner2',
      title: 'Monthly budget',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 456,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'owner2',
      title: 'Annual budget',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 456,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'owner2',
      title: 'To-do list',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 456,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'owner2',
      title: 'Investment tracker',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 456,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'owner2',
      title: 'Work schedule',
      // data: any,
      status: 'private',
    },
  ];
}
