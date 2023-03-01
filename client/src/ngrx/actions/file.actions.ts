import { createAction, props } from '@ngrx/store';
import { File } from '../../app/model/file.model';
export const FileActions = {
  createFile: createAction('[File] Create File'),
  createFileSuccess: createAction('[File] Create File Success', props<{ file: File }>()),
  createFileFailure: createAction('[File] Create File Failure', props<{ error: string }>()),

  getFileById: createAction('[File] Get File'),
  getFileSuccessById: createAction('[File] Get File Success', props<{ file: File }>()),
  getFileFailureById: createAction('[File] Get File Failure', props<{ error: string }>()),

  saveFile: createAction('[File] Save File'),
  saveFileSuccess: createAction('[File] Save File Success', props<{ file: File }>()),
  saveFileFailure: createAction('[File] Save File Failure', props<{ error: string }>()),
}
