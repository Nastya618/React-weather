import React from 'react'
import s from './Popup.module.scss'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'

type Props = {
	active: any
	setActive: any
}

export const Popup = ({ active, setActive }: Props) => {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: '20° - ощущается как 17°',
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: '765 мм ртутного столба - нормальное',
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков',
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: '3 м/с юго-запад - легкий ветер',
		},
	]
	return (
		<>
			<div
				className={active ? s.blur + ' ' + s.active : s.blur}
				onClick={() => setActive(false)}
			>
				<div className={s.popup} onClick={e => e.stopPropagation()}>
					<div className={s.day}>
						<div className={s.day_temp}>20°</div>
						<div className={s.day_name}>Среда</div>
						<div className={s.img}>
							<GlobalSvgSelector id='sun' />
						</div>
						<div className={s.day_time}>
							Время: <span>18:00</span>
						</div>
						<div className={s.day_city}>
							Город: <span>Волгоград</span>
						</div>
					</div>
					<div className={s.this_day_info_items}>
						{items.map((item: Item) => {
							return <ThisDayItem key={item.icon_id} item={item} />
						})}
					</div>
					<div className={s.close} onClick={() => setActive(false)}>
						<GlobalSvgSelector id='close' />
					</div>
				</div>
			</div>
		</>
	)
}
