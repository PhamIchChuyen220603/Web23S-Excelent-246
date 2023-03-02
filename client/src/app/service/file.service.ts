import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { File } from '../model/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private fireStore: Firestore) {}

  db = collection(this.fireStore, 'excelFiles');

  async createFile(file: File) {
    return await setDoc(doc(this.db), file);
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

  fileArr = [
    {
      fileId: '1',
      ownerId: 'owner1',
      createdDate: 2032023,
      modifiedDate: 123,
      modifiedBy: 'owner123',
      createdBy: 'me',
      title: 'Empty',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 2032023,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'me',
      title: 'Monthly budget',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 2032023,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'me',
      title: 'Annual budget',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 2032023,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'me',
      title: 'To-do list',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 2032023,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'me',
      title: 'Investment tracker',
      // data: any,
      status: 'private',
    },
    {
      fileId: '2',
      ownerId: 'owner2',
      createdDate: 2032023,
      modifiedDate: 456,
      modifiedBy: 'owner456',
      createdBy: 'me',
      title: 'Work schedule',
      // data: any,
      status: 'private',
    },
  ];
}
