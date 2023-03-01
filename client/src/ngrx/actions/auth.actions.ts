import { createAction, props } from '@ngrx/store';
import { User } from '../../app/model/user.model';
export const AuthActions = {
  login: createAction('[Auth] Login'),
  loginSuccess: createAction('[Auth] Login Success', props<{ user: User }>()),
  loginFailure: createAction('[Auth] Login Failure', props<{ error: string }>()),

  logout: createAction('[Auth] Logout'),
  logoutSuccess: createAction('[Auth] Logout Success'),
  logoutFailure: createAction('[Auth] Logout Failure', props<{ error: string }>()),

  // getProfile: createAction(
  //   '[Auth] Get Profile',
  //   props<{ idToken: string }>()
  // ),
  // getProfileSuccess: createAction(
  //   '[Auth] Get Profile Success',
  //   props<{ user: User }>()
  // ),
  // getProfileFailure: createAction(
  //   '[Auth] Get Profile Failure',
  //   props<{ error: string }>()
  // ),

};
