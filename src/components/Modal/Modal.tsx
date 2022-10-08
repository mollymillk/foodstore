import React, { Dispatch } from 'react';
import {GrFormClose} from 'react-icons/gr';
import './Modal.sass';
import { PaymentCard } from './PaymentCard/PaymentCard';

type Props = {
    active: boolean,
    setActive: Dispatch<React.SetStateAction<boolean>>
}

export const Modal = (props:Props):JSX.Element => {
	return <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
		<div className='modal_container' onClick={e => e.stopPropagation()}>
			<div className="close_button">
				<GrFormClose size={25} onClick={()=>props.setActive(false)}/>
			</div>
			<PaymentCard setActive={props.setActive}/>
		</div>
	</div>;
};