import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Signup.sass';
import { isPossiblePhoneNumber} from 'libphonenumber-js';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/authorizationReducer';
import { Form, Input } from 'antd';
import { addUser } from '../../../store/reducers/usersReducer';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';


type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const Signup = ({setActive}:Props):JSX.Element => {

	const users = useSelector((state:RootState) => state.users);

	const [form] = Form.useForm();

	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isAccepted, setIsAccepted] = useState<boolean>(false);

	const [nameHelper, setNameHelper] = useState<string>('');
	const [emailHelper, setEmailHelper] = useState<string>('');
	const [phoneHelper, setPhoneHelper] = useState<string>('');
	const [passwordHelper, setPasswordHelper] = useState<string>('');

	const dispatch = useDispatch();

	useEffect(() => {
		if (userName && email && phone && password) {
			setIsAccepted(true);
		} else {
			setIsAccepted(false);
		}
	}, [email, password, phone, userName]);

	const checkUserName = (value:string) => {
		if (/^[A-ZА-ЯЁ]+$/i.test(value)) {
			setUserName(value);
			setNameHelper('');
		} else {
			setUserName('');
			setNameHelper('Содержит только буквы?');
		}
	};

	const checkEmail = (value:string) => {
		const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		if (value.match(EMAIL_REGEXP)) {
			setEmail(value);
			setEmailHelper('');	
		} else {
			setEmail('');
			setEmailHelper('Проверьте данные');
		}
	};

	const checkPhone = (value:string) => {
		if (isPossiblePhoneNumber(value, 'RU')) {
			setPhone(value);
			setPhoneHelper('');
			
		} else {
			setPhone('');
			setPhoneHelper('Проверьте данные');
		}
	};

	const checkPassword = (value:string) => {
		if (value.match(/([a-zа-яё][0-9]|[0-9][a-zа-яё])/gi)) {
			setPassword(value);
			setPasswordHelper('');
		} else {
			setPassword('');
			setPasswordHelper('Содержит буквы и цифры?');
		}
	};

	const handleSend = () => {

		const doubledEmail = users.find(user => user.email === email);
		const doubledPhone = users.find(user => user.phone === phone);

		if (doubledEmail && !doubledPhone) {
			setEmailHelper('Email уже занят');
		} else if (!doubledEmail && doubledPhone) {
			setPhoneHelper('Телефон уже занят');
		} else if (doubledEmail && doubledPhone) {
			setEmailHelper('Email уже занят');
			setPhoneHelper('Телефон уже занят');
		} else {
			form.resetFields();
			dispatch(login([userName, phone]));
			setActive(false);
			setIsAccepted(false);

			const userData = {
				userName: userName,
				phone: phone,
				email: email,
				password: password
			};

			dispatch(addUser(userData));
		}
	};

	return <div className='signup'>

		<Form
			form={form}
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}>

			<Form.Item
				name='userName'
				className='signup_username'
				required
				label="Имя"
				help={nameHelper}
				rules={[
					{
						required: true,
						message: ''
					},
				]}
			>
				<Input
					onBlur={(e)=>checkUserName(e.target.value)}
					maxLength={15}
				/>
			</Form.Item>
			<Form.Item
				name='email'
				className='signup_email'
				required
				help={emailHelper}
				label="Email"
				rules={[
					{
						required: true,
						message: ''
					},
				]}
			>
				<Input
					onChange={(e)=>checkEmail(e.target.value)}
				/>
			</Form.Item>
			<Form.Item
				name='phone'
				className='signup_phone'
				required
				label="Телефон"
				help={phoneHelper}
				rules={[
					{
						required: true,
						message: ''
					},
				]}
			>
				<Input 
					onBlur={(e)=>checkPhone(e.target.value)}
				/>
			</Form.Item>
			<Form.Item
				name='password'
				className='signup_password'
				required
				label="Пароль"
				help={passwordHelper}
				rules={[
					{
						required: true,
						message: ''
					},
				]}

			>
				<Input.Password
					onChange={(e)=>checkPassword(e.target.value)}
				/>
			</Form.Item>

			<Button
				variant="contained"
				className='signup_button'
				onClick={()=>handleSend()}
				disabled={!isAccepted}
				type='submit'
			>
				Зарегистрироваться
			</Button>

		</Form>

	</div>;
};