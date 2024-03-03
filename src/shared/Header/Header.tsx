import React from 'react'
import Select from 'react-select'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'

const options = [
	{ value: 'city-1', label: 'Москва' },
	{ value: 'city-2', label: 'Санкт-Петербург' },
	{ value: 'city-3', label: 'Волгоград' },
]

const colourStyles = {
	control: (styles: any) => ({
		...styles,
		backgroundColor: 'rgba(71, 147, 255, 0.2)',
		width: '194px',
		height: '37px',
		border: 'none',
		borderRadius: '10px',
		zIndex: 100,
	}),
}

type Props = {}

export const Header = (props: Props) => {
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme}>
					<GlobalSvgSelector id='change-theme' />
				</div>
				<Select
					defaultValue={options[2]}
					styles={colourStyles}
					options={options}
				/>
			</div>
		</header>
	)
}
