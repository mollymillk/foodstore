import React, { Dispatch } from 'react';
import {GrFormClose} from 'react-icons/gr';
import { Address } from './Address/Address';
import { Authorization } from './Authorization/Authorization';
import { CancelOrder } from './CancelOrder/CancelOrder';
import './Modal.sass';
import { PaidOrder } from './PaidOrder/PaidOrder';
import { PaymentCard } from './PaymentCard/PaymentCard';

type Props = {
    active: boolean,
    setActive: Dispatch<React.SetStateAction<boolean>>,
	data: string,
	orderId?: number | undefined
}

export const Modal = ({active, setActive, data, orderId}:Props):JSX.Element => {

	return <div 
		className={active ? 'modal active' : 'modal'}
		onClick={() => setActive(false)}
	>
		<div
			className='modal_container'
			onClick={e => e.stopPropagation()}>

			<div className="close_button">

				<GrFormClose
					size={25}
					onClick={()=>setActive(false)}/>
			</div>

			{data === 'card' && <PaymentCard setActive={setActive}/>}
			{data === 'address' && <Address setActive={setActive}/>}
			{data === 'paidOrder' && <PaidOrder setActive={setActive}/>}
			{data === 'login' && <Authorization setActive={setActive} data='login'/>}
			{data === 'signup' && <Authorization setActive={setActive} data='signup'/>}
			{data === 'cancel' && <CancelOrder orderId={orderId} setActive={setActive}/>}


		</div>
	</div>;
};