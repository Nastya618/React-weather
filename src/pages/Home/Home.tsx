import React, { useEffect } from 'react'
import s from './Home.module.scss'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import { Days } from './components/Day/Days'
import { useCustomDispatch, useCustomSelector } from '../../hooks/Store'
import { fetchCurrentWeather } from '../../store/thunks/FetchCurrentWeather'
import { selectCurrentWeatherData } from '../../store/Selectors'

type Props = {}
export const Home = (props: Props) => {
	const dispatch = useCustomDispatch()
	const { weather } = useCustomSelector(selectCurrentWeatherData)

	useEffect(() => {
		dispatch(fetchCurrentWeather('paris'))
	}, [dispatch])
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo />
			</div>
			<Days />
		</div>
	)
}
