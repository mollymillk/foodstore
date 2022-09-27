import React from 'react';
import { Card } from './Card/Card';
import { getGoods } from './getGoods';

type Props = {
	onlyDiscounted: boolean
};

export const Goods = (props:Props):JSX.Element => {
	
	const products = getGoods();
	const data = Object.values(products);	

	return <>
		{props.onlyDiscounted ? 
			data && data.map(product => {
				const sale = product.sale ? product.sale : 0;
				if(product.sale) {
					return <Card
						img={product.image_front_small_url}
						name={product.product_name}
						key={product.id}
						price={product.price}
						sale={sale}
						id={product.id}
					/>;
				}}) :
			data && data.map(product => {
				const sale = product.sale ? product.sale : 0;
				return <Card
					img={product.image_front_small_url}
					name={product.product_name}
					key={product.id}
					price={product.price}
					sale={sale}
					id={product.id}
				/>;
			})}
	</>;
	
};