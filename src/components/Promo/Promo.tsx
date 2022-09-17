import React from 'react';
import './Promo.sass';

type Props = {
	num: string;
	heading: string;
	size: string;
	promo: string
}

export const Promo = (props:Props):JSX.Element => {
	const containerClassName =  props.num + '_sale_container';
	return <div className={containerClassName}>
		<div className='sale'>
			<div className='text'>{props.heading}</div>
			<div className='size'>{props.size}</div>
		</div>
		<div className='promo'>
			<p className='code'>{props.promo}</p>
		</div>
	</div>;
};