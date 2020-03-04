<template lang="pug">
	.o-app#app(:class="{isTiming}")
		header.o-app__header
			h1.o-app__title Count down timer

		main.o-app__main
			m_timer(:availableMinutes="timerMinutes" :availableSeconds="timerSeconds" :minutes="minutes" :seconds="seconds" :timeLeft="countDown")
			a_totalTime(:minutes="minutes" :seconds="secondsString")
			.o-app__instructions
				p Press #[strong space] to quick restart.
				p Press #[strong backspace] to reset.
				p Press #[strong enter] to play/pause.
				p Press #[strong Esc] to create a pop-out timer.
				p Press #[strong F11] for full screen mode.

		a_notifyAudio(:timeLeft="countDown" :isTiming="isTiming")
</template>

<script>
import events from '../helpers/global_events.js'
import { toSeconds, toMinutes, toMilliseconds } from '../helpers/converters'
import secondsString from '../helpers/secondsString'
import preventSleep from '../helpers/preventSleep'

import m_timer from './m_timer'
import a_totalTime from './a_totalTime'
import a_notifyAudio from './a_notifyAudio'

const storageMinutes = parseInt(localStorage.getItem('timer-minutes'))
const storageSeconds = parseInt(localStorage.getItem('timer-seconds'))

const t = {
	min: isNaN(storageMinutes) ? 5 : storageMinutes,
	sec: isNaN(storageSeconds) ? 0 : storageSeconds,
}

const defaultTime = toMilliseconds({ minutes: t.min, seconds: t.sec })

export default {
	created() {
		// Prevent computer from sleeping so that the screen doesn't lock
		preventSleep()

		if (navigator.userAgent.includes('Firefox/')) {
			alert(
				`Sorry, the site currently doesn't function properly in FireFox. Please use Chrome.`,
			)
		}

		// listen for events fired off by children
		events.$on('reset', this.reset)
		events.$on('restart', this.restart)
		events.$on('toggle', this.toggle)

		events.$on('input', ({ type, val }) => this.setTime({ [type]: val }))
	},
	mounted() {
		this.reset()

		document.documentElement.addEventListener('keyup', e => {
			const fn = {
				Space: () => this.restart(),
				Backspace: () => this.reset(),
				Enter: () => this.toggle(),
				Escape: () => this.popOut(),
			}
			if (fn[e.code]) {
				e.preventDefault()
				fn[e.code]()
			}
		})
	},
	data() {
		return {
			defaultTime,
			time: 0,
			countDown: defaultTime,
			isTiming: false,
			timerMinutes: t.min,
			timerSeconds: t.sec,
			timer: setInterval(() => {
				if (this.isTiming) {
					this.increment()
				}
			}, 1000),
		}
	},
	computed: {
		minutes() {
			return toMinutes(this.time)
		},
		seconds() {
			const secs = toSeconds(this.time)
			return secs < 60 ? secs : secs - toMinutes(this.time) * 60
		},
		secondsString() {
			return secondsString(this.seconds)
		},
	},
	components: {
		m_timer,
		a_totalTime,
		a_notifyAudio,
	},
	methods: {
		restart() {
			this.reset()
			this.start()
		},
		reset() {
			this.time = 0
			this.countDown = this.defaultTime
			this.isTiming = false
		},
		start() {
			this.isTiming = true
			events.$emit('blur')
		},
		stop() {
			this.isTiming = false
		},
		toggle() {
			this.isTiming ? this.stop() : this.start()
		},
		increment() {
			this.time = this.time + toMilliseconds({ seconds: 1 })
			this.countDown = this.countDown - toMilliseconds({ seconds: 1 })
		},
		setTime({ minutes = this.timerMinutes, seconds = this.timerSeconds }) {
			const newTime = toMilliseconds({ minutes, seconds })
			Object.assign(this, {
				countDown: newTime,
				defaultTime: newTime,
				timerMinutes: parseInt(minutes),
				timerSeconds: parseInt(seconds),
			})
			localStorage.setItem('timer-minutes', minutes)
			localStorage.setItem('timer-seconds', seconds)
		},
		popOut() {
			const windowSettings = {
				innerWidth: 100,
				innerHeight: 100,
				menubar: 0,
				toolbar: 0,
				location: 0,
				personalbar: 0,
				status: 0,
			}
			const stringWindowSettings = Object.keys(windowSettings)
				.map(key => `${key}=${windowSettings[key]}`)
				.join(',')
			window.open(location.href, 'Timer', stringWindowSettings)
		},
	},
}
</script>

<style lang="scss" src="../main.scss"></style>

<style lang="scss">
@import '../vars.scss';

.o-app {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 20px 10px;

	@media (max-height: 400px) {
		padding-bottom: 0;
	}

	&__header {
		@media (max-width: $bp-tiny), (max-height: 400px) {
			display: none;
		}
	}

	&__title {
		font-size: 3em;
	}

	&__instructions {
		margin-top: 2em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		strong {
			color: palegoldenrod;
		}

		p {
			margin: 30px;
		}

		@media (max-width: $bp-tiny), (max-height: 400px) {
			display: none;
		}
	}

	&__main {
		align-items: center;

		@media (max-width: $bp-tiny) {
			display: flex;
			flex-direction: column;
		}
		@media (max-height: 400px) and (min-width: $bp-tiny + 1) {
			display: flex;
			width: 100%;
			justify-content: space-evenly;
		}
		@media (max-height: 400px) {
			font-size: 1.5em;
		}
	}

	&.isTiming {
		cursor: none;
	}
}
</style>
