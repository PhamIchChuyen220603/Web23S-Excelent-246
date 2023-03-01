import { User } from '../../app/model/user.model';
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  inProcess: boolean;
  error: string;
}


