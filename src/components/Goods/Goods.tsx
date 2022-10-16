import React, {Suspense} from 'react';
import { Card } from './Card/Card';
import { getGoods } from './getGoods';

type Props = {
	category: string
}


const Goods = (props:Props):JSX.Element => {
	
	const products = getGoods();
	const data = Object.values(products);	

	return <>
		{props.category ?

			data && data.map(product => {
				const sale = product.sale ? product.sale : 0;
			
				if (product.category == props.category) {
					console.log(props.category);

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

export default Goods;