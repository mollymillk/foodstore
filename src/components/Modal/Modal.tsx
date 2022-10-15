import React, { Dispatch } from 'react';
import {GrFormClose} from 'react-icons/gr';
import { Address } from './Address/Address';
import { Authorization } from './Authorization/Authorization';
import { Login } from './Login/Login';
import './Modal.sass';
import { PaidOrder } from './PaidOrder/PaidOrder';
import { PaymentCard } from './PaymentCard/PaymentCard';
import { Signup } from './Signup/Signup';

type Props = {
    active: boolean,
    setActive: Dispatch<React.SetStateAction<boolean>>,
	data: string
}

export const Modal = (props:Props):JSX.Element => {

	return <div 
		className={props.active ? 'modal active' : 'modal'}
		onClick={() => props.setActive(false)}
	>
		<div
			className='modal_container'
			onClick={e => e.stopPropagation()}>

			<div className="close_button">

				<GrFormClose
					size={25}
					onClick={()=>props.setActive(false)}/>
			</div>

			{props.data === 'card' && <PaymentCard setActive={props.setActive}/>}
			{props.data === 'address' && <Address setActive={props.setActive}/>}
			{props.data === 'paidOrder' && <PaidOrder setActive={props.setActive}/>}
			{props.data === 'login' && <Authorization setActive={props.setActive} data='login'/>}
			{props.data === 'signup' && <Authorization setActive={props.setActive} data='signup'/>}

		</div>
	</div>;
};