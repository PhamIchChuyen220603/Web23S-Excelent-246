import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import { FileActions } from '../actions/file.actions';
import { FileState } from '../states/file.states';
const initialState: FileState = {
  file: null,
  loading: false,
  inProcess: false,
  error: '',
};
export const FileReducer = createReducer(
  initialState,
  on(FileActions.createFile, (state) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }
  ),
  on(FileActions.createFileSuccess, (state, { file }) => {
    return {
      ...state,
      file: file,
      inProcess: false,
      loading: false,
      error: '',
    };
  }
  ),
  on(FileActions.createFileFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error,
    };
  }
  ),
  on(FileActions.getFileById, (state) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }
  ),
  on(FileActions.getFileSuccessById, (state, { file }) => {
    return {
      ...state,
      file: file,
      inProcess: false,
      loading: false,
      error: '',
    };
  }
  ),
  on(FileActions.getFileFailureById, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error,
    };
  }
  ),
)

