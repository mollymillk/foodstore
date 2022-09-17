import React from 'react';
import './Category.sass';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
	category: string,
	heading: string
}

export const Category = (props:Props) => {
	const categoryClass = props.category + ' category';
	return <div className={categoryClass}>
		<div className='heading'>{props.heading}</div>
	</div>;
};