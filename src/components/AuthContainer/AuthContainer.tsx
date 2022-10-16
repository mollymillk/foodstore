import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './AuthContainer.sass';
import img from './img/auth_icon.svg';

export const AuthContainer = () => {

	const [isSignUpModalActive, setIsSignUpModalActive] = useState<boolean>(false);


	return <> <div className='auth_container'>
		<img src="" alt="" srcSet={img} className='auth_icon'/>
		<h3 className='auth_message'>Кажется, вы не выполнили вход.</h3>
		<Button
			className='auth_button'
			onClick={()=>setIsSignUpModalActive(true)}
		>
			Войти
		</Button>
	</div>
	<Modal data='signup' active={isSignUpModalActive} setActive={setIsSignUpModalActive}/>
	</>;
};