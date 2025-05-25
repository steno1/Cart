import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../features/api/productApi';
import { servicesApi } from '../features/api/serviceApi';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(servicesApi.middleware),  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
