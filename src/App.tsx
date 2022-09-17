import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import './globalStyles/styles.sass';
import { Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products/Products';
import { Sales } from './pages/Sales/Sales';
import { Blog } from './pages/Blog/Blog';

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage/>}></Route>
				<Route path='/sales' element={<Sales/>} />
				<Route path='/products' element={<Products/>} />
				<Route path='/blog' element={<Blog/>} />
				<Route path='/contacts' element={<Blog/>} />
			</Routes>
			<Footer />
		</>
	);
};
