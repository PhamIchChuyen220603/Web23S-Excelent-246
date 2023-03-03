import { User } from '../../app/model/user.model';
export interface AuthState {
  user: User | null;
  users: User[] | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
}


