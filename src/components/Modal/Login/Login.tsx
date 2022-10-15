import { Button } from '@mui/material';
import React from 'react';
import './Login.sass';
import 'antd/dist/antd.css';
import { Checkbox, Form, Input } from 'antd';

type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const Login = ({setActive}:Props) => {
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
				<Input />
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
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
			</Form.Item>

			<Form.Item
				// wrapperCol={{
				// 	offset: 8,
				// 	span: 16,
				// }}
			>
			</Form.Item>
		</Form>
		<Button
			variant="contained"
			className='login_button'
			onClick={()=>setActive(false)}
		>
			Войти
		</Button>
	</div>;
};