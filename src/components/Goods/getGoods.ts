import { useGetGoodsByNameQuery } from '../../store/goodsApi';
import { productsData, Entries } from '../../store/queries/productsQuery';

export const getGoods = () => {
	const result = {};

	const entries:Entries = Object.entries(productsData);

	entries.forEach(([category, productData]) => {

		result[category] = {};

		productData.forEach((product) => {

			const {data, isLoading} = useGetGoodsByNameQuery(product.id);

			if (!isLoading) {
				const id = data.code;
				result[category][id] = data.product;

			}
		});
	});
	// console.log(Object.values(result));

	return result;
};