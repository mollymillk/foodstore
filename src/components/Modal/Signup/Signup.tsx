import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Signup.sass';
import { isPossiblePhoneNumber, isValidPhoneNumber,validatePhoneNumberLength} from 'libphonenumber-js';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/authorizationReducer';


type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const Signup = ({setActive}:Props) => {

	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isAccepted, setIsAccepted] = useState<boolean>(false);

	const [nameHelper, setNameHelper] = useState<string>('');
	const [emailHelper, setEmailHelper] = useState<string>('');
	const [phoneHelper, setPhoneHelper] = useState<string>('');

	const dispatch = useDispatch();

	useEffect(() => {
		if (userName && email && phone && password) {
			setIsAccepted(true);
		} else {
			setIsAccepted(false);
		}
	}, [email, password, phone, userName]);

	const checkUserName = (value:string) => {
		if (value.match(/[A-Za-z0-9]/g)) {
			setUserName(value);
			
		} else {
			setNameHelper('Может содержать латинские буквы и числа');
		}
	};

	const checkEmail = (value:string) => {
		const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		if (value.match(EMAIL_REGEXP)) {
			setEmail(value);			
		} else {
			setEmailHelper('Проверьте правильность данных');
		}
	};

	const checkPhone = (value:string) => {
		if (isPossiblePhoneNumber(value, 'RU')) {
			setPhone(value);
			console.log(value);
			
		} else {
			setPhoneHelper('Проверьте правильность данных');
		}
	};

	const handleSend = () => {
		dispatch(login([userName, phone]));
		setActive(false);
	};



	return <div className='signup'>
		<TextField
			className='signup_username'
			required
			variant='outlined'
			label="Логин"
			type="text"
			onChange={(e)=>checkUserName(e.target.value)}
			autoComplete="nickname"
		/>
		<TextField
			className='signup_email'
			required
			variant='outlined'
			label="Email"
			type="email"
			onChange={(e)=>checkEmail(e.target.value)}
			autoComplete="email"
		/>
		<TextField
			className='signup_phone'
			required
			variant='outlined'
			label="Телефон"
			type="phone"
			onChange={(e)=>checkPhone(e.target.value)}
		/>
		<TextField
			className='signup_password'
			required
			variant='outlined'
			label="Пароль"
			type="password"
			onChange={(e)=>setPassword(e.target.value)}
		/>

		<Button
			variant="contained"
			className='signup_button'
			onClick={()=>handleSend()}
			disabled={!isAccepted}
		>
				Зарегистрироваться
		</Button>
	</div>;
};