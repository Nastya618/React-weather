import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'
export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/month-statistic' element={<MonthStatistics />} />
			</Routes>
		</div>
	)
}
