import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Signup.sass';
import { isPossiblePhoneNumber, isValidPhoneNumber,validatePhoneNumberLength} from 'libphonenumber-js';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/authorizationReducer';
import { Form, Input } from 'antd';


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
		if (value.match(/[a-zа-я]/gi)) {
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
		<Form
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}>

			<Form.Item
				className='signup_username'
				required
				label="Имя"
				rules={[
					{
						required: true,
						message: ''
					},
				]}
			>
				<Input
					onChange={(e)=>checkUserName(e.target.value)}
					maxLength={15}
				/>
			</Form.Item>
			<Form.Item
				className='signup_email'
				required
				label="Email"
			>
				<Input
					onChange={(e)=>checkEmail(e.target.value)}
				/>
			</Form.Item>
			<Form.Item
				className='signup_phone'
				required
				label="Телефон"
			>
				<Input 
					onChange={(e)=>checkPhone(e.target.value)}
				/>
			</Form.Item>
			<Form.Item
				className='signup_password'
				required
				label="Пароль"
			>
				<Input.Password
					onChange={(e)=>setPassword(e.target.value)}
				/>
			</Form.Item>
		</Form>

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