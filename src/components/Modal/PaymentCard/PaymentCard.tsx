import React, { useEffect, useRef, useState } from 'react';
import './PaymentCard.sass';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCard } from '../../../store/reducers/orderInfoReducer';


type Props = {
	isActive: (arg:boolean) => boolean
}

export const PaymentCard = (props:Props) => {
	const [number, setNumber] = useState('');
	const [name, setName] = useState('');
	const [expiry, setExpiry] = useState('');
	const [cvc, setCvc] = useState('');
	const [focus, setFocus] = useState('');
	const [isAccepted, setIsAccepted] = useState(false);
  
	useEffect(() => {
		ref.current.focus();
	}, []);

	useEffect(() => {
		if (number.length === 16 
			&& name.match(/[A-Za-z][\s][A-Za-z]/g)
			&& expiry.length === 4
			&& cvc.length === 3) {
			setIsAccepted(true);
		} else {
			setIsAccepted(false);
		}
	}, [name, expiry, number, cvc]);

	const validateNumberInput = (value:string) => {
		const validated = value.replace(/\D/g,'');
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

		const validated = value.replace(/\D/g,'');
		setExpiry(validated);
	};

	const validateCvcInput = (value: string) => {
		const validated = value.replace(/\D/g,'');
		setCvc(validated);
	};

	const dispatch = useDispatch();

	const handleSendCard = () => {
		const lastNumbers = number.substring(12);
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
			<form className='card_info'>
				<TextField
					name="number"
					placeholder="Номер карты"
					value={number}
					className={number.length === 16 ? 'number accepted' : 'number empty'}
					onChange = {(e:React.ChangeEvent<HTMLInputElement>) => validateNumberInput(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
					ref={ref}
					inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 16}}
				/>
				<TextField
					name="name"
					placeholder="Имя"
					value={name}
					className={name.match(/[A-Za-z][\s][A-Za-z]/g) ? 'name accepted' : 'name empty'}
					onChange={(e:React.ChangeEvent<HTMLInputElement>) => validateNameInput(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
				/>
				<TextField
					name="expiry"
					placeholder="ММ/ГГ"
					value={expiry}
					className={expiry.length === 4 ? 'expiry accepted' : 'expiry empty'}
					onChange={(e) => validateDateInput(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
					inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 4}}
				/>
				<TextField
					name="cvc"
					placeholder="CVC"
					value={cvc}
					className={cvc.length === 3 ? 'cvc accepted' : 'cvc empty'}
					onChange={(e) => validateCvcInput(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
					inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 3}}
				/>
			</form>
			<Button
				disabled={!isAccepted}
				className='button'
				variant='contained'
				onClick={()=>handleSendCard()}
			>
				Отправить
			</Button>
		</div>
	);
};