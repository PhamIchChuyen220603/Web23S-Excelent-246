import { File } from '../../app/model/file.model';
export interface FileState {
  file: File | null;
  files: File[] | [];
  loading: boolean;
  inProcess: boolean;
  error: string;
}
