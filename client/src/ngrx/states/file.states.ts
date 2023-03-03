import { File } from '../../app/model/file.model';
export interface FileState {
  file: File | any;
  files: File[] | any;
  loading: boolean;
  inProcess: boolean;
  error: string;
}
