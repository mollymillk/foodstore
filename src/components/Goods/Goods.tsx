import React from 'react';
import { Card } from './Card/Card';
import { getGoods } from './getGoods';

export const Goods = ():JSX.Element => {
	
	const data = getGoods();

	return <>
		{data && data.map(product => {
			return <Card
				img={product.image_front_small_url}
				name={product.product_name}
				key={product.id}
				id={product.id}/>;
		})}
	</>;
	
};