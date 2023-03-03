import { createReducer, on } from '@ngrx/store';
import { FileActions } from '../actions/file.actions';
import { FileState } from '../states/file.states';
const initialState: FileState = {
  file: null,
  files: [],
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
  on(FileActions.getFileById, (state,{fileId}) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }
  ),
  on(FileActions.getFileByIdSuccess, (state, { file }) => {
    return {
      ...state,
      file: file,
      inProcess: false,
      loading: false,
      error: '',
    };
  }
  ),
  on(FileActions.getFileByIdFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  }
  ),

  on(FileActions.getAllFiles, (state) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }
  ),
  on(FileActions.getAllFilesSuccess, (state, { files }) => {
    return {
      ...state,
      files: <[]>files,
      inProcess: false,
      loading: false,
      error: '',
    };
  }
  ),
  on(FileActions.getAllFilesFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  }),

  on(FileActions.getFilesByUserId, (state, {userId}) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(FileActions.getFilesByUserIdSuccess, (state, { files }) => {
    return {
      ...state,
      files: files,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(FileActions.getFilesByUserIdFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  }),

  on(FileActions.getFilesByDate, (state, {date}) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(FileActions.getFilesByDateSuccess, (state, { files }) => {
    return {
      ...state,
      files: files,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(FileActions.getFilesByDateFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  }),
  on(FileActions.updateFile, (state, {fileId, file}) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(FileActions.updateFileSuccess, (state, { file }) => {
    return {
      ...state,
      file: file,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(FileActions.updateFileFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  }),
  on(FileActions.deleteFile, (state, {fileId}) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(FileActions.deleteFileSuccess, (state) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(FileActions.deleteFileFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  }),
  on(FileActions.saveFile, (state, {file}) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(FileActions.saveFileSuccess, (state) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(FileActions.saveFileFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: error,
    };
  })
)