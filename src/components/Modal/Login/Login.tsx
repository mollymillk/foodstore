import { TextField, Button } from '@mui/material';
import React from 'react';
import './Login.sass';

type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const Login = ({setActive}:Props) => {
	return <div className='login'>
		<TextField
			className='login_username'
			required
			variant='outlined'
			label="Логин"
			type="text"
			autoComplete="nickname"/>
		<TextField
			className='login_password'
			required
			variant='outlined'
			label="Пароль"
			type="password"
			autoComplete="current-password"
		/>
		<Button
			variant="contained"
			className='login_button'
			onClick={()=>setActive(false)}
		>
			Войти
		</Button>
	</div>;
};