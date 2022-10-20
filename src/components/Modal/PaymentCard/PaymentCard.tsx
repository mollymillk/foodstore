import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './PaymentCard.sass';
import Cards, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCard } from '../../../store/reducers/orderInfoReducer';
import { Form, Input } from 'antd';


type Props = {
	setActive: Dispatch<SetStateAction<boolean>>
}

export const PaymentCard = (props:Props) => {
	const [number, setNumber] = useState('');
	const [name, setName] = useState('');
	const [expiry, setExpiry] = useState('');
	const [cvc, setCvc] = useState('');
	const [focus, setFocus] = useState<Focused>('number');
	const [isAccepted, setIsAccepted] = useState(false);
  
	useEffect(() => {
		const current:(Focused) = ref.current;
		current.focus();
	}, []);

	useEffect(() => {
		if (number.length >= 16 
			&& name.match(/[A-Za-z][\s][A-Za-z]/g)
			&& expiry.length === 4
			&& cvc.length === 3) {
			setIsAccepted(true);
		} else {
			setIsAccepted(false);
		}
	}, [name, expiry, number, cvc]);

	const validateNumberInput = (value:string) => {
		const validated = value.replace(/[^\d\s]/g,'');
		setNumber(validated);
	};

	const validateNameInput = (value: string) => {
		if (!value) {
			setName('');
		}

		const validated = value.match(/[A-Za-z\s?]/g)?.join('').toUpperCase();
  
		if (validated) {
			setName(validated);
		}
	};

	const validateDateInput = (value: string) => {

		const validated = value.replace(/[\D]/g,'');
		setExpiry(validated);
	};

	const validateCvcInput = (value: string) => {
		const validated = value.replace(/\D/g,'');
		setCvc(validated);
	};

	const dispatch = useDispatch();

	const handleSendCard = () => {
		const lastNumbers = number.includes(' ') ?
			number.split(' ').join('').substring(12) :
			number.substring(12);
		dispatch(setCard(lastNumbers));
		props.setActive(false);
		
	};
  
	const ref = useRef(null);

	return (
		<div className="payment_card">
			<Cards
				number={number}
				name={name}
				expiry={expiry}
				cvc={cvc}
				focused={focus}
			/>

			<Form className='card_form'>
				<Form.Item className='form_item'>
					<Input
						size="large"
						name='number'
						value={number}
						ref={ref}
						placeholder="Номер карты"
						onFocus={(e) => setFocus(e.target.name)}
						onChange = {(e:React.ChangeEvent<HTMLInputElement>) => validateNumberInput(e.target.value)}
						inputMode= 'numeric'
						pattern= '[0-9]*'
						maxLength={19}
					/>
				</Form.Item>
				<Form.Item className='form_item'>
					<Input
						size="large"
						name="name"
						placeholder="Имя"
						value={name}
						onChange={(e:React.ChangeEvent<HTMLInputElement>) => validateNameInput(e.target.value)}
						onFocus={(e) => setFocus(e.target.name)}/>
				</Form.Item>
				<Form.Item className='form_item'>
					<Input
						size="large"
						name="expiry"
						placeholder="ММГГ"
						value={expiry}
						onChange={(e) => validateDateInput(e.target.value)}
						onFocus={(e) => setFocus(e.target.name)}
						inputMode='numeric'
						pattern='[0-9]*'
						maxLength={4}
					/>
				</Form.Item>
				<Form.Item className='form_item'>
					<Input
						size="large"
						name="cvc"
						placeholder="CVC"
						value={cvc}
						onChange={(e) => validateCvcInput(e.target.value)}
						onFocus={(e) => setFocus(e.target.name)}
						inputMode='numeric'
						pattern ='[0-9]*'
						maxLength={3}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						disabled={!isAccepted}
						className='button'
						variant='contained'
						onClick={()=>handleSendCard()}
					>
						Отправить
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};