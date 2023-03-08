import { createAction, props } from '@ngrx/store';
import { File } from '../../app/model/file.model';
export const FileActions = {
  createFile: createAction('[File] Create File', props<{ userId: string, file: File }>()),
  createFileSuccess: createAction('[File] Create File Success', props<{ file: File }>()),
  createFileFailure: createAction('[File] Create File Failure', props<{ error: string }>()),

  deleteFile: createAction('[File] Delete File', props<{ fileId: string }>()),
  deleteFileSuccess: createAction('[File] Delete File Success', props<{ fileId: string }>()),
  deleteFileFailure: createAction('[File] Delete File Failure', props<{ error: string }>()),

  updateFile: createAction('[File] Update File', props<{ fileId: string, file: File }>()),
  updateFileSuccess: createAction('[File] Update File Success', props<{ fileId: string, file: File}>()),
  updateFileFailure: createAction('[File] Update File Failure', props<{ error: string }>()),

  getFileById: createAction('[File] Get File', props<{ fileId: string }>()),
  getFileByIdSuccess: createAction('[File] Get File Success', props<{ file: File }>()),
  getFileByIdFailure: createAction('[File] Get File Failure', props<{ error: string }>()),

  getAllFiles: createAction('[File] Get All File'),
  getAllFilesSuccess: createAction('[File] Get All File Success', props<{ files: File[] }>()),
  getAllFilesFailure: createAction('[File] Get All File Failure', props<{ error: string }>()),

  getFilesByUserId: createAction('[File] Get File By User Id', props<{ userId: string }>()),
  getFilesByUserIdSuccess: createAction('[File] Get File By User Id Success', props<{ files: File[] }>()),
  getFilesByUserIdFailure: createAction('[File] Get File By User Id Failure', props<{ error: string }>()),

  getFilesByMemberId: createAction('[File] Get File By Member Id', props<{ memberId: string }>()),
  getFilesByMemberIdSuccess: createAction('[File] Get File By Member Id Success', props<{ files: File[] }>()),
  getFilesByMemberIdFailure: createAction('[File] Get File By Member Id Failure', props<{ error: string }>()),

  getFilesByDate: createAction('[File] Get File By Date'),
  getFilesByDateSuccess: createAction('[File] Get File By Date Success', props<{ files: File[] }>()),
  getFilesByDateFailure: createAction('[File] Get File By Date Failure', props<{ error: string }>()),

  getFilesByTitle: createAction('[File] Get File By Title'),
  getFilesByTitleSuccess: createAction('[File] Get File By Title Success', props<{ files: File[] }>()),
  getFilesByTitleFailure: createAction('[File] Get File By Title Failure', props<{ error: string }>()),

  saveFile: createAction('[File] Save File', props<{ file: File }>()),
  saveFileSuccess: createAction('[File] Save File Success'),
  saveFileFailure: createAction('[File] Save File Failure', props<{ error: string }>()),

  openFile: createAction('[File] Open File', props<{ file: File }>()),
  openFileSuccess: createAction('[File] Open File Success'),
  openFileFailure: createAction('[File] Open File Failure', props<{ error: string }>()),


}
