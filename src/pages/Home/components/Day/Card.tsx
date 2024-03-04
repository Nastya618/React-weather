import React from 'react'
import s from './Days.module.scss'
import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector'
import { Day } from './Days'

type Props = {
	day: Day
}

export const Card = ({ day }: Props) => {
	return (
		<div className={s.card}>
			<div className={s.day}>{day.day}</div>
			<div className={s.day_info}>{day.day_info}</div>
			<div className={s.img}>
				<GlobalSvgSelector id={day.icon_id} />
			</div>
			<div className={s.temp_day}>{day.temp_day}</div>
			<div className={s.temp_night}>{day.temp_day}</div>
			<div className={s.info}>{day.info}</div>
		</div>
	)
}
