import React, { useEffect, useState } from 'react';
import { Goods } from '../../components/Goods/Goods';
import { Promo } from '../../components/Promo/Promo';
import './Products.sass';

type Categories = {
	bread: string,
	milk: string,
	meat: string,
	coffee: string,
	tea: string,
	base: string,
	sweet: string
}

type Entries = [string, string];

const categories:Categories = {
	bread: 'Выпечка',
	milk: 'Молочка',
	meat: 'Мясо',
	coffee: 'Кофе',
	tea: 'Чай',
	base: 'Всегда нужно',
	sweet: 'Сладкое'
};

export const Products = (): JSX.Element => {

	const [selectedCategory, setSelectedCategory] = useState('');

	const entries:Entries[] = Object.entries(categories);

	const categoriesList = entries.map(([key,value]) => {
		const categoryClass = key == selectedCategory ? 
			'active' + ' category': 'category'

		return <div 
			className={categoryClass} 
			key={key}
			onClick={()=>setSelectedCategory(key)}>
			{value}
	</div>;
	});

	console.log(selectedCategory);
	

	return <div className='products_page'>
		<div className="banners">
			<Promo
				num='first'
				key={1}
				heading='Первый заказ'
				size='-50%'
				promo='new50'
			/>
			<Promo
				num='second'
				key={2}
				heading='При заказе от 1500₽'
				size='скидка 200₽'
				promo='catch200'
			/>
			<Promo
				num='third'
				key={3}
				heading='Каждый день до 12:00'
				size='-20%'
				promo='fresh20'
			/>
		</div>
		<div className='categories'>
			{categoriesList}
		</div>
		<div className='goods'>
			<Goods category={selectedCategory}/>
		</div>
	</div>;
};
