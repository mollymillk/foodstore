import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './OrderInput.sass';

type Props = {
    inputType: 'address'|'card';
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderInput = ({inputType, setModalActive}:Props) => {

	const orderInfo = useSelector((state:RootState) => state.orderInfo);

	return <div className={inputType + '_container'}>
		<p className='goods_category'>
			{inputType === 'address' && 'Адрес'}
			{inputType === 'card' && 'Способ оплаты'}
		</p>
		{orderInfo[inputType] ?
			<div className={inputType +'_info'}>
				<p className='text'>{orderInfo[inputType]}</p>
				<p className='change_button' onClick={() => setModalActive(true)}>изменить</p>
			</div>
			: <p className={inputType+'_value'} onClick={() => setModalActive(true)}>Выбрать</p>}
	</div>; 

};