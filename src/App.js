import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomeScreenCard from './screens/HomeScreenCards';
import ProductScreen from './screens/ProductScreen';

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path='/' element={<HomeScreenCard />} />
				<Route path='/product/:id' element={<ProductScreen />} />
			</Routes>
			<FooterComponent />
		</>
	);
}

export default App;
