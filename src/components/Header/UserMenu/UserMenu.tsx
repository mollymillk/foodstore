import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {BiUser} from 'react-icons/bi';
import './UserMenu.sass';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Modal } from '../../Modal/Modal';
import { Dropdown, Menu } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducers/authorizationReducer';
import { setDefaultItems } from '../../../store/reducers/itemsReducer';
import { setDefaultCost, removePromoSale } from '../../../store/reducers/costReducer';
import { setDefaultOrderInfo } from '../../../store/reducers/orderInfoReducer';
import { resetPromo } from '../../../store/reducers/promoReducer';


export const UserMenu = () => {


	const isAuthorized = useSelector((state:RootState) => state.authorization.isAuthorized);
	const name = useSelector((state:RootState) => state.authorization.name);

	const [isLoginModalActive, setIsLoginModalActive] = useState<boolean>(false);
	const [isSignUpModalActive, setIsSignUpModalActive] = useState<boolean>(false);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(setDefaultItems());
		dispatch(setDefaultCost());
		dispatch(setDefaultOrderInfo());
		dispatch(removePromoSale());
		dispatch(resetPromo());
	};

	const dispatch = useDispatch();
	const loginMenu = (
		<Menu 
			items={[
				{
					key: '1',
					label: (
						<><Button
							className='menu_item'
							onClick={()=>setIsLoginModalActive(true)}					
						>
							Войти
						</Button></>
					)
				},
				{
					key: '2',
					label: (
						<><Button
							className='menu_item'
							onClick={()=>setIsSignUpModalActive(true)}>
							Регистрация
						</Button></>
					)
				}
	
			]}/>
	);

	const authMenu = (
		<Menu 
			items={[
				{
					key: '1',
					label: (
						<><Button
							className='menu_item'					
						>
							<NavLink to='/user'>Заказы</NavLink>
						</Button></>
					)
				},
				{
					key: '2',
					label: (
						<><Button
							className='menu_item'
							onClick={() => handleLogout()}
						>
							Выйти
						</Button></>
					)
				}
	
			]}/>
	);


	return <>
		<Dropdown 
			overlay= {isAuthorized ? authMenu : loginMenu}
			placement='bottom'
		>
			<Button className='menu_button'>
				<BiUser size={25}/>
				<p className='button_text'>{name ? name : 'Войти'}</p>
			</Button>

		</Dropdown>

		<Modal data='login' active={isLoginModalActive} setActive={setIsLoginModalActive}/>
		<Modal data='signup' active={isSignUpModalActive} setActive={setIsSignUpModalActive}/>
	</>;
};