import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Order.sass';
import { Modal } from '../Modal/Modal';
import { OrderInput } from './OrderInput/OrderInput';
import { OrderInfo } from './OrderInfo/OrderInfo';
import { PromoInput } from './PromoInput/PromoInput';
import { OrderButton } from './OrderButton/OrderButton';

type Props = {
	sum: number,
	sale: number,
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Order = ({sum, setActive}:Props):JSX.Element => {

	const totalCost = useSelector((state:RootState) => state.totalCost.cost);
	const promoSale = useSelector((state:RootState) => state.totalCost.promoSale);
	const orderInfo = useSelector((state:RootState) => state.orderInfo);

	const [cardModalActive, setCardModalActive] = useState<boolean>(false);
	const [addressModalActive, setAddressModalActive] = useState<boolean>(false);
	const [isPaymentAllowed, setIsPaymentAllowed] = useState<boolean>(false);

	useEffect(() => {
		if (orderInfo.card
			&& orderInfo.address
			&& totalCost >= 500) {
			setIsPaymentAllowed(true);
		}
	}, [orderInfo, totalCost]);


	return <div className='order_container'>
		
		<OrderInput inputType='address' setModalActive={setAddressModalActive}/>
		<OrderInput inputType='card' setModalActive={setCardModalActive}/>

		<div className='order_info'>
			<h3>Ваш заказ</h3>

			<OrderInfo type='goods' category='Товары' value={sum + '₽'}/>
			<OrderInfo type='sale' category='Скидка' value={sum - Math.floor(totalCost) + promoSale[1] + '₽'}/>
			<OrderInfo type='cost' category='Стоимость доставки' value='Бесплатно'/>

		</div>

		<PromoInput/>

		<div className='order_cost'>
			<h3 className='cost_text'>Итого</h3>
			<p className='value'>{Math.floor(totalCost - promoSale[1])}₽</p>
		</div>

		<OrderButton isPaymentAllowed={isPaymentAllowed} setActive={setActive} cost={Math.floor(totalCost - promoSale[1])}/>

		<Modal data='card' active={cardModalActive} setActive={setCardModalActive} />
		<Modal data='address' active={addressModalActive} setActive={setAddressModalActive} />
	</div>;
};