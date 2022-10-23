import React, { useState } from 'react';
import './Promo.sass';
import copy from 'copy-to-clipboard';
import { Tooltip } from '@mui/material';

type Props = {
	num: string;
	heading: string;
	size: string;
	promo: string
}

export const Promo = (props:Props):JSX.Element => {

	const [hasCopied, setHasCopied] = useState(false);

	const copyUrl = () =>{
		copy(props.promo);
		setHasCopied(true);
	};

	const tooltipText = hasCopied ? 'Промокод скопирован!' : 'Клик!';

	const containerClassName =  props.num + '_sale_container';

	return  <Tooltip title={tooltipText}>

		<div className={containerClassName} 
			onClick={() => copyUrl()}
			onMouseLeave={() => setHasCopied(false)}>

			<div className='sale'>
				<div className='text'>{props.heading}</div>
				<div className='size'>{props.size}</div>
			</div>

			<div className='promo'>
				<p className='code'>
					{props.promo}
				</p>
			</div>
		</div>

	</Tooltip>;
};