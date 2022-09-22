import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const rootElement = document.getElementById('root');
const store = setupStore();

if (!rootElement) {
	throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
