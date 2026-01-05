import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../types/product-type';

export const productActions = createActionGroup({
  source: 'Products',
  events: {
    load: emptyProps(), // no need to pass any props for loading all products
    loadSuccess: props<{ products: Product[] }>(),
    loadFailure: props<{ error: string }>(),

    search: props<{ searchQuery: string }>(),
  },
});