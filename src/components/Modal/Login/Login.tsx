import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Login.sass';
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/authorizationReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const Login = ({setActive}:Props):JSX.Element => {

	const users = useSelector((state:RootState) => state.users);

	const dispatch = useDispatch();
	const [phone, setPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const handleSend = () => {

		const currentUser = users
			.find(user => user.phone === phone && user.password === password);

		if (currentUser) {
			setMessage('');
			dispatch(login([currentUser.userName, phone]));
			setActive(false);

		} else {
			setMessage('Неверный телефон или пароль');
		}
	};

	return <div className='login'>
		<Form
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
		>
			<Form.Item
				label="Телефон"
				rules={[
					{
						required: true,
						message: '',
					},
				]}
			>
				<Input
					onChange={(e)=>setPhone(e.target.value)}
					type='numeric'

				/>
			</Form.Item>

			<Form.Item
				label="Пароль"
				help={message}
				rules={[
					{
						required: true,
						message: ''
					},
				]}
			>
				<Input.Password
					onChange={(e)=>setPassword(e.target.value)}
				/>
			</Form.Item>

		</Form>
		<Button
			disabled={(password && phone) ? false : true}
			variant="contained"
			className='login_button'
			onClick={()=>handleSend()}
		>
			Войти
		</Button>
	</div>;
};