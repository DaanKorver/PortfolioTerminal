import './style.css'

import { banner, fetch, commands, projectlist, about } from './outputs.js'
import { echo, clear, social, date, theme } from './commands.js'

const prompt = document.querySelector('form > label')
const terminal = document.querySelector('.history')
const cliLine = document.querySelector('form')
const cli = document.querySelector('form > input')
const main = document.querySelector('main')

let history = []
let historyIndex = history.length

window.addEventListener('click', () => {
	cli.focus()
})

cliLine.addEventListener('submit', e => {
	e.preventDefault()
	insertCommand(cli.value)
	history.push(cli.value)
	historyIndex = history.length
	cli.value = ''
})
cli.addEventListener('keydown', e => {
	if (e.keyCode === 38 || e.keyCode === 40) {
		if (e.keyCode === 38) {
			e.preventDefault()
			if (historyIndex - 1 >= 0) {
				historyIndex--
			}
		}
		if (e.keyCode === 40) {
			e.preventDefault()
			if (historyIndex < history.length) {
				historyIndex++
			}
		}
		cli.value = history[historyIndex] ? history[historyIndex] : ''
	}
})

insertCommand('banner')

function insertCommand(command) {
	terminal.insertAdjacentHTML(
		'beforeend',
		`<div class="command">
      <span>${prompt.innerHTML}</span>
      <p>${command}</p>
    </div>`
	)
	handleCommand(command)
}

function handleCommand(command) {
	switch (command.split(' ')[0]) {
		case '':
			break
		case 'echo':
			echo(command, true)
			break
		case 'banner':
			echo(banner)
			break
		case 'fetch':
			echo(fetch)
			break
		case 'help':
			echo(commands)
			break
		case 'clear':
			clear()
			break
		case 'github':
			social('github')
			break
		case 'linkedin':
			social('linkedin')
			break
		case 'date':
			date()
			break
		case 'projects':
			echo(projectlist)
			break
		case 'about':
			echo(about)
			break
		case 'theme':
			theme(command)
			break
		default:
			echo(`Command not found: ${command.split(' ')[0]}`)
	}
	main.scrollTop = main.scrollHeight
}
