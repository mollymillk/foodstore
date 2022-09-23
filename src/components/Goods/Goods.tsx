import React from 'react';
import { Card } from './Card/Card';
import { getGoods } from './getGoods';

export const Goods = ():JSX.Element => {
	
	const data = getGoods();
	const goods = [];

	const values = Object.values(data);

	values.forEach(value => {
		Object.values(value).forEach(item => {
			goods.push(item);
		});
	});
	
	
	

	return <>
		{goods && goods.map(item => {
			return <Card
				img={item.image_front_small_url}
				name={item.product_name}
				key={item._id}
				id={item.id}/>;
		})}
	</>;
	
};