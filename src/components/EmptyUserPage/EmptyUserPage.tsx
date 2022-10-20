import React from 'react';
import { NavLink } from 'react-router-dom';
import './EmptyUserPage.sass';
import img from './img/empty_user_icon.svg';


export const EmptyUserPage = () => {

	return <div className='empty_user_page'>

		<img src="" alt="empty_cart" srcSet={img} className='empty_icon'/>

		<p className='empty_message'>
			Кажется, у вас ещё нет заказов
		</p>

		<NavLink to='/' className='empty_link'>
			За покупками!
		</NavLink>

	</div>;
};