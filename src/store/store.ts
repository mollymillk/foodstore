import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { goodsApi } from './goodsApi';
import costReducer from './reducers/costReducer';
import itemsReducer from './reducers/itemsReducer';
import orderInfoReducer from './reducers/orderInfoReducer';
import promoReducer from './reducers/promoReducer'

const rootReducer = combineReducers({
	[goodsApi.reducerPath]: goodsApi.reducer,
	cartItems: itemsReducer,
	totalCost: costReducer,
	promo: promoReducer,
	orderInfo: orderInfoReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => 
			getDefaultMiddleware()
				.concat(goodsApi.middleware)
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];