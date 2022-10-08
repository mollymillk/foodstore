import React, { Dispatch } from 'react';
import {GrFormClose} from 'react-icons/gr';
import { Address } from './Address/Address';
import './Modal.sass';
import { PaymentCard } from './PaymentCard/PaymentCard';

type Props = {
    active: boolean,
    setActive: Dispatch<React.SetStateAction<boolean>>,
	data: string
}

export const Modal = (props:Props):JSX.Element => {
	return <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
		<div className='modal_container' onClick={e => e.stopPropagation()}>
			<div className="close_button">
				<GrFormClose size={25} onClick={()=>props.setActive(false)}/>
			</div>
			{props.data === 'card' && <PaymentCard setActive={props.setActive}/>}
			{props.data === 'address' && <Address setActive={props.setActive}/>}

		</div>
	</div>;
};