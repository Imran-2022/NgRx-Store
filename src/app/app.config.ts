import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as authEffect from './shared/store/auth-effect';
import { authFeatures } from './shared/store/auth-feature';
import { provideNgToast } from 'ng-angular-popup';

export const API_URL = new InjectionToken<string>('API_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideEffects(authEffect),
    provideState(authFeatures),
    {
      provide: API_URL,
      useValue: 'https://fakestoreapi.com'
    },
    provideNgToast(
      {
        duration: 2000,
        position: 'toaster-top-right',
        width: 250,
      }
    )
  ]
};
