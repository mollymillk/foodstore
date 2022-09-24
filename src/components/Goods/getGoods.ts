import { useGetGoodsByNameQuery } from '../../store/goodsApi';
import { productsData } from '../../store/queries/productsQuery';

type Product = { 
	image_front_small_url: string,
	product_name: string,
	id: string,
	price: number,
	category: string
}

type Products = {
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
	

	return Object.values(result);
};