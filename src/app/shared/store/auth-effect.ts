// who call api 🐸
// functional effects for auth actions

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApi } from '../services/auth-api';
import { Router } from '@angular/router';
import { authActions } from './auth-actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { MyStorage } from '../services/storage';
import { extractToken } from '../util/extractToken';
import { NgToastService } from 'ng-angular-popup';

export const loginEffect = createEffect(
    (
        actions$ = inject(Actions),
        authApi = inject(AuthApi),
        router = inject(Router),
        storage = inject(MyStorage),
        toast=inject(NgToastService),

    ) => {
        return actions$.pipe(
            ofType(authActions.login), // catch action of type login
            switchMap((loginRequest) => {
                return authApi.login(loginRequest).pipe(
                    map((response) => {
                        router.navigateByUrl('/products');
                        toast.success('Login Successful','Welcome back!');
                        storage.setItem('ngrxstore_token', response.token);
                        const payload = extractToken(response.token);

                        if (payload) {
                            return authActions.loginSuccess({ token: response.token, userId: payload.sub });
                        }
                        return authActions.loginSuccess({ token: response.token, userId: null });
                    }),
                    catchError((error) => {
                        toast.danger('Login failed','Welcome back!');
                        return of(authActions.loginFailure({ error: error.message }));
                    })
                );
            })
        );
    },
    {
        functional: true,
    }
);

export const registerEffect = createEffect(
    (actions$ = inject(Actions), authApi = inject(AuthApi),toast=inject(NgToastService), router = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap((registerRequest) => {
                return authApi.register(registerRequest).pipe(
                    map(() => {
                        router.navigateByUrl('/login');
                        toast.success('Registration Successful','success');
                        return authActions.registerSuccess();
                    }),
                    catchError((error) => {
                        toast.danger('registration failed','Welcome back!');
                        return of(authActions.registerFailure({ error: error.message }));
                    })
                );
            })
        );
    },
    {
        functional: true,
    }
);

export const logoutEffect = createEffect(
  (actions$ = inject(Actions), storage = inject(MyStorage), router = inject(Router), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(authActions.logout),
      map(() => {
        storage.removeItem('ngrxstore_token');
        router.navigateByUrl('/login');
        toast.success('Logout Successful', 'SUCCESS');
        return authActions.logoutSuccess();
      })
    );
  },
  {
    functional: true,
  }
);