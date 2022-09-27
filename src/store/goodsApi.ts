import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type ProductData = {
	product: {
		image_front_small_url: string,
		product_name: string,
	}
}

export const goodsApi = createApi({

	reducerPath: 'goodsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://world.openfoodfacts.org/api/v0/product/' }),
	endpoints: (builder) => ({
		getGoodsByName: builder.query<ProductData, string>({
			query: (id) => `${id}.json`,
		}),
	}),
});
  

export const { useGetGoodsByNameQuery } = goodsApi;

