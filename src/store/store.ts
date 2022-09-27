import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { goodsApi } from './goodsApi';
import itemsReducer from './reducers/itemsReducer';

const rootReducer = combineReducers({
	[goodsApi.reducerPath]: goodsApi.reducer,
	cartItems: itemsReducer
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