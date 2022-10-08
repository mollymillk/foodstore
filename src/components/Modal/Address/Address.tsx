import { Button } from '@mui/material';
import React, { Dispatch, useEffect, useState } from 'react';
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../../store/reducers/orderInfoReducer';
import './Address.sass';

type Props = {
    setActive: Dispatch<React.SetStateAction<boolean>>
}

export const Address = (props:Props) => {

	const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
	const [isAddressSelected, setIsAddressSelected] = useState(false);
	const dispatch = useDispatch();

	const handleSendAddress = () => {
		if (value) {
			dispatch(setAddress(value?.value));
			props.setActive(false);
		}
	};

	useEffect(() => {
		if (value) {
			setIsAddressSelected(true);
		}
	}, [value]);

	return <div className='order_address'>

		<p>Введите адрес:</p>

		<AddressSuggestions
			token="5bbd873cbd4a8e545ab54ec9bb1b04bb69131173"
			value={value}
			onChange={setValue}
		/>

		<Button className='button'
			disabled={!isAddressSelected}
			onClick={()=>handleSendAddress()}
		>
			Отправить
		</Button>
	</div>;
};