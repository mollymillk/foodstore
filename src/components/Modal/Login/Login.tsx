import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Login.sass';
import 'antd/dist/antd.css';
import { Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/authorizationReducer';

type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const Login = ({setActive}:Props) => {

	const dispatch = useDispatch();
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const handleSend = () => {
		dispatch(login(['Дарья', phone]));
		setActive(false)
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