import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//прописать типы ответов

export const goodsApi = createApi({
	reducerPath: 'goodsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://world.openfoodfacts.org/api/v0/product/' }),
	endpoints: (builder) => ({
		getGoodsByName: builder.query<unknown, string>({
			query: (id) => `${id}.json`,
		}),
	}),
});
  

export const { useGetGoodsByNameQuery } = goodsApi;

