import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products/Products';
import { Cart } from './pages/Cart/Cart';
import { User } from './pages/User/User';
import './globalStyles/ant.less';
import './globalStyles/styles.sass';

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Products/>} />
				<Route path='/cart' element={<Cart/>} />
				<Route path='/user' element={<User/>} />
			</Routes>
			<Footer />
		</>
	);
};