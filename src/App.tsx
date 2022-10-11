import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './globalStyles/styles.sass';
import { Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products/Products';
import { Cart } from './pages/Cart/Cart';
import { User } from './pages/User/User';

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