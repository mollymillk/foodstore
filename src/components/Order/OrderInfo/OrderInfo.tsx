import React from 'react';
import './OrderInfo.sass';
type Props = {
	type: 'goods'|'sale'|'cost',
	category: string,
	value: string|number
}

export const OrderInfo = ({type, category, value}:Props) => {
	return <div className={'order_'+type}>
		<p className={type+'_categoty'}>{category}</p>
		<p className='value'>{value}</p>
	</div>;
};