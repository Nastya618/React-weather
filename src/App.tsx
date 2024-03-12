import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { Header } from './shared/Header/Header'
import { Popup } from './shared/Popup/Popup'

export default function App() {
	const [popupActive, setPopupActive] = useState(true)
	return (
		<div className='global-container'>
			<Popup active={popupActive} setActive={setPopupActive} />
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/react-weather' element={<Home />} />
				</Routes>
			</div>
		</div>
	)
}
