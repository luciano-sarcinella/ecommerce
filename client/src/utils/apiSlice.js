import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/productos' }),
    endpoints: builder => ({
      getProductos: builder.query({
        query: pageId => `/${pageId}`      
      }),
      addNewPost: builder.mutation({
        query: productoId => ({
          url: `detail/${productoId}` ,
          method: 'POST',
          // Include the entire post object as the body of the request
          body: productoId
        })
      })
    }),
})

export const {useGetProductosQuery} = apiSlice