import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {BiUser} from 'react-icons/bi';
import './UserMenu.sass';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
	return <PopupState variant="popover" popupId="demo-popup-menu">
		{(popupState) => (
			<div className='user_menu'>
				<Button startIcon={<BiUser />} variant="contained" className='menu_button' {...bindTrigger(popupState)}>
			Дарья
				</Button>
				<Menu {...bindMenu(popupState)}>
					<MenuItem onClick={popupState.close}>
						<NavLink to='/user' className='to_user'>
							Заказы
						</NavLink>
					</MenuItem>
					<MenuItem onClick={popupState.close}>Выйти</MenuItem>
				</Menu>
			</div>
		)}
	</PopupState>;
};