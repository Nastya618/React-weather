import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'
import { Header } from './shared/Header/Header'
import { Popup } from './shared/Popup/Popup'

export default function App() {
	return (
		<div className='global-container'>
			<Popup />
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/month-statistic' element={<MonthStatistics />} />
				</Routes>
			</div>
		</div>
	)
}
