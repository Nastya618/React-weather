import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { Header } from './shared/Header/Header'
import { Popup } from './shared/Popup/Popup'

export default function App() {
	return (
		<div className='global-container'>
			<Popup />
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/react-weather' element={<Home />} />
				</Routes>
			</div>
		</div>
	)
}
