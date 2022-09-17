import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.sass';
import {BiSearchAlt} from 'react-icons/bi';
import {VscAccount} from 'react-icons/vsc';
import {BsCart} from 'react-icons/bs';
 
export const Header = ():JSX.Element => {
	return <header className='header'>
		<div className='logo'>food store .</div>
		<nav className='main_nav'>
			<NavLink className='menu_item' to='/sales'>Акции</NavLink>
			<NavLink className='menu_item' to='/products'>Продукты</NavLink>
			<NavLink className='menu_item' to='/blog'>Блог</NavLink>
			<NavLink className='menu_item' to='/contacts'>Контакты</NavLink>
		</nav>
		<nav className='icon_nav'>
			<div className='menu_item'><BiSearchAlt/></div>
			<div className='menu_item'><VscAccount/></div>
			<div className='menu_item'><BsCart/></div>
		</nav>
	</header>;
};
