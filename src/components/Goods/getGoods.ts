import { useGetGoodsByNameQuery } from '../../store/goodsApi';
import { productsData } from '../../store/queries/productsQuery';

type Product = {
	sale?: number; 
	image_front_small_url: string,
	product_name: string,
	id: string,
	price: number,
	category: string
}

export type Products = {
	[id: string] : Product
}


export const getGoods = () => {

	const result:Products = {};

	productsData.forEach(product => {

		const {data, isLoading} = useGetGoodsByNameQuery(product.id);

		if (data && !isLoading) {
			const id = product.id;
			result[id] = {...data.product, ...product};
		}

	});
	

	return result;
};