
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: ({ limit = 3 }) => `products?limit=${limit}&select=title,description,thumbnail`,
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;
