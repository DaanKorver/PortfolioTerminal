import classes from './themes.module.css'
import { listThemes, themeUsage } from './outputs.js'

const terminal = document.querySelector('.history')
const availableThemes = [
	'default',
	'term',
	'light',
	'belafonteday',
	'belafontenight',
	'bim',
	'broadcast',
]
let currentTheme = localStorage.getItem('theme') || 'default'

if (currentTheme !== 'default') changeTheme(currentTheme)

function echo(text, userInput) {
	if (userInput) {
		const value = text.replace('echo ', '')
		echo(value)
	} else {
		terminal.insertAdjacentHTML('beforeend', `<pre>${text}</pre>`)
	}
}

function clear() {
	terminal.innerHTML = ''
}

function social(type) {
	echo('Here you go:')
	switch (type) {
		case 'github':
			echo(
				'<a target="_blank" href="https://github.com/DaanKorver">github.com/DaanKorver</a>'
			)
			break
		case 'linkedin':
			echo(
				'<a target="_blank" href="https://linkedin.com/in/daan-korver-132425160">daan-korver-132425160</a>'
			)
			break
	}
}

function date() {
	const date = new Date()
	const day = date.getDate()
	const month = date.getMonth()
	const year = date.getFullYear()
	echo(`${day}-${month}-${year}`)
}

function theme(command) {
	const type = command.split(' ')[1]
	switch (type) {
		case 'get':
			echo(currentTheme)
			break
		case 'set':
			const newTheme = command.split(' ')[2]
			const isAvailable = availableThemes.includes(newTheme)
			if (isAvailable) {
				changeTheme(newTheme)
				currentTheme = newTheme
				localStorage.setItem('theme', currentTheme)
			} else {
				echo(`Theme "${newTheme}" is not available`)
			}
			break
		case 'list':
			echo(listThemes(availableThemes))
			break
		default:
			echo(themeUsage)
	}
}

function changeTheme(newTheme) {
	document.body.className = classes[newTheme] || ''
}

export { echo, clear, social, date, theme }
