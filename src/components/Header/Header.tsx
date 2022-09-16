import React from 'react';
import './Header.sass';

export const Header = ():JSX.Element => {
	return <header className='header'>
		<div className='logo'>food store</div>
		<nav className='main_nav'>
			<div className='menu_item'>Акции</div>
			<div className='menu_item'>Продукты</div>
			<div className='menu_item'>Блог</div>
			<div className='menu_item'>Контакты</div>
		</nav>
		<nav className='icon_nav'>
			<div className='menu_item'>Поиск</div>
			<div className='menu_item'>Аккаунт</div>
			<div className='menu_item'>Корзина</div>
		</nav>
	</header>;
};
