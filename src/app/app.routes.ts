import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { productFeature } from './pages/products/store/product-feature';
import { provideEffects } from '@ngrx/effects';
import * as productEffect from './pages/products/store/product-effect';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => m.Register)
    },
    {
        path: '',
        loadComponent: () => import('./pages/main-layout').then(m => m.MainLayout),
        // canActivate: [authGuard],
        
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'products'
            },
            {
                path: 'products',
                loadComponent: () => import('./pages/products/products').then(m => m.Products),
                providers: [provideState(productFeature), provideEffects(productEffect)],
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile').then(m => m.Profile)
            },
            {
                path: 'cart',
                loadComponent: () => import('./pages/cart/cart').then(m => m.Cart)
            }
        ]
    }
];