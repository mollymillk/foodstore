import React from 'react';
import { getGoods } from './getGoods';

export const Goods = ():JSX.Element => {
	
	const data = getGoods();

	return <div>
		{data && 
		data.map(([category, productData]) =>{
			
		})}
	</div>;
	
};