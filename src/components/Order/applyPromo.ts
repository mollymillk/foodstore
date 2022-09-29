import { useDispatch, useSelector } from 'react-redux';
import { discount20, discount200, discount50 } from '../../store/reducers/costReducer';
import { RootState } from '../../store/store';

export const applyPromo = (promo:string):string => {
	const totalCost = useSelector((state:RootState) => state.totalCost);
	const dispatch = useDispatch();

	const successMessage = 'Промокод применён!';

	if (promo === 'new50') {

		dispatch(discount50());
		return successMessage;

	} else if (promo === 'catch200') {

		if (totalCost.cost >= 1500) {
			return successMessage;
		}  else {
			dispatch(discount200());
			const missingAmount = 1500 - totalCost.cost;
			return `Добавьте товары на ${missingAmount} рублей`;
		}
	} else if (promo === 'fresh20') {

		const now = new Date();
		const hour = now.getHours();

		if (hour < 12) {
			dispatch(discount20());
			return successMessage;
		}
		return 'Акция действует до 12:00 :(';
	}
	return 'Такого промокода нет';
};