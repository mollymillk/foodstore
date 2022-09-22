import React from 'react';
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
	
	
	

	return <div>
		{goods && goods.map(item => {
			return <img srcSet={item.image_front_small_url} alt="" srcset="" />
		})}
	</div>;
	
};