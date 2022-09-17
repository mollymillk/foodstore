import React from 'react';
import { Category } from '../../components/Category/Category';
import './Products.sass';

type Categories = {
	bread: string,
	milk: string,
	meat: string,
	coffee: string,
	tea: string,
}

type Entries = [string, string];

const categories:Categories = {
	bread: 'Выпечка',
	milk: 'Молочка',
	meat: 'Мясо',
	coffee: 'Кофе',
	tea: 'Чай'
};

export const Products = (): JSX.Element => {

	const entries:Entries[] = Object.entries(categories);
	const categoriesList = entries.map(([key,value]) => {
		return <Category category={key} heading={value} key={key}/>;
	});

	return <div className='products_page'>
		{categoriesList}
	</div>;
};
