import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ProductType } from '../models/Product'

type PurchasePayload = {
  products: ProductType[]
  delivery: {
    receiver?: string
    address: {
      description?: string
      city?: string
      zipCode?: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name?: string
      number?: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vitoriamatos.github.io/product/api.json'
    // baseUrl: '../../assets/api.json'
  }),
  endpoints: (builder) => ({
    getFeaturedProduct: builder.query<ProductType[], void>({
      query: () => '',
      transformResponse: (response: { produtos: ProductType[] }) =>
        response.produtos
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetFeaturedProductQuery, usePurchaseMutation } = api

export default api
