import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import './globalStyles/styles.sass';

export const App = () => {
	return (
		<>
			<Header />
			<MainPage />
			<Footer />
		</>
	);
};
