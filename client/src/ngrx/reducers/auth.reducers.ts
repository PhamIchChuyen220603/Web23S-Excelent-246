import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState } from '../states/auth.states'
const initialState: AuthState = {
  user: null,
  users:[],
  isAuthenticated: false,
  loading: false,
  error: '',
};
export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(AuthActions.loginSuccess, (state, { user }) => {
    return {
      ...state,
      user: user,
      isAuthenticated: true,
      inProcess: false,
      loading: false,
      error: '',
    }
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      user: null,
      isAuthenticated: false,
      inProcess: false,
      loading: false,
      error,
    };
  }),
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(AuthActions.logoutSuccess, (state) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(AuthActions.logoutFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error,
    };
  }),


  on(AuthActions.getAllUsers, (state) => {
    return {
      ...state,
      inProcess: true,
      loading: true,
      error: '',
    };
  }),
  on(AuthActions.getAllUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users: users,
      inProcess: false,
      loading: false,
      error: '',
    };
  }),
  on(AuthActions.getAllUsersFailure, (state, { error }) => {
    return {
      ...state,
      inProcess: false,
      loading: false,
      error,
    };
  })


  // on(AuthActions.getProfile, (state) => {
  //   return {
  //     ...state,
  //     inProcess: true,
  //     loading: true,
  //     error: '',
  //   };
  // }),
  // on(AuthActions.getProfileSuccess, (state, { user }) => {
  //   return {
  //     ...state,
  //     user,
  //     inProcess: false,
  //     loading: false,
  //     error: '',
  //   };
  // }),
  // on(AuthActions.getProfileFailure, (state, { error }) => {
  //   return {
  //     ...state,
  //     inProcess: false,
  //     loading: false,
  //     error,
  //   };
  // }),
);

