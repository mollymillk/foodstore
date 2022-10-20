import React, { Suspense } from 'react';
import { getGoods } from './getGoods';

type Props = {
	category: string
}

const Card = React.lazy(()=>import('./Card/Card'));


const Goods = ({category}:Props):JSX.Element => {
	
	const products = getGoods();
	const data = Object.values(products);	

	return <>

		{data && data.map(product => {

			const sale = product.sale ? product.sale : 0;
			if (product.category == category || category === '') {

				return <Suspense key={product.id} fallback={<div className='card suspense'></div>}>

					<Card
						img={product.image_front_small_url}
						name={product.product_name}
						key={product.id}
						price={product.price}
						sale={sale}
						id={product.id}
					/>
				</Suspense>;

			}})}

	</>;
	
};

export default Goods;