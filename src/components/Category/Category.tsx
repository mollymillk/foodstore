import React from 'react';
import './Category.sass';

type Props = {
	category: string,
	heading: string
}

export const Category = (props:Props) => {
	const categoryClass = props.category + ' category';
	return <div className={categoryClass}>
		<div className='heading'>{props.heading}</div>
	</div>;
};