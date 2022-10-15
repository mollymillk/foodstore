import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Login } from '../Login/Login';
import { Signup } from '../Signup/Signup';
import './Authorization.sass';


type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>,
	data: string
};

export const Authorization = ({setActive, data}:Props) => {

	const [authType, setAuthType] = useState(data);

	return <div className='authorization'>
		<div className='auth_type'>
			<Button
				className='login'
				onClick={()=>setAuthType('login')}>
				Вход
			</Button>
			<Button
				className='signup'
				onClick={()=>setAuthType('signup')}>
				Регистрация
			</Button>
		</div>
		{authType === 'login' && <Login setActive={setActive}/>}
		{authType === 'signup' && <Signup setActive={setActive}/>}
	</div>;
};