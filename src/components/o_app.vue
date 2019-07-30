<template lang="pug">
	.o-app#app(:class="{isTiming}")
		header.o-app__header
			h1.o-app__title Count down timer

		main.o-app__main
			m_timer(:availableMinutes="timerMinutes" :availableSeconds="timerSeconds" :minutes="minutes" :seconds="seconds")
			a_totalTime(:minutes="minutes" :seconds="secondsString")
			.o-app__instructions
				p Press #[strong space] to quick restart.
				p Press #[strong backspace] to reset.
				p Press #[strong enter] to play/pause.
				p Press #[strong F11] for full screen mode.

</template>

<script>

import events from '../helpers/global_events.js';
import { toSeconds, toMinutes, toMilliseconds } from '../helpers/converters';
import secondsString from '../helpers/secondsString';
import preventSleep from '../helpers/preventSleep';

import m_timer from './m_timer';
import a_totalTime from './a_totalTime';

const t = {
	min: parseInt(localStorage.getItem('timer-minutes')) || 5,
	sec: parseInt(localStorage.getItem('timer-seconds')) || 0,
}

const defaultTime = toMilliseconds({minutes: t.min, seconds: t.sec});


export default {
	created(){
		// Prevent computer from sleeping so that the screen doesn't lock
		preventSleep();

		// listen for events fired off by children
		events.$on('reset', this.reset);
		events.$on('restart', this.restart);
		events.$on('toggle', this.toggle);

		events.$on('input', ({type, val}) => this.setTime({[type]: val}));
	},
	mounted(){
		this.reset();

		document.documentElement.addEventListener('keyup', (e)=> {
			const fn = {
				Space: ()=> this.restart(),
				Backspace: ()=> this.reset(),
				Enter: ()=> this.toggle(),
			}
			if (fn[e.code]) fn[e.code]();
		})
	},
	data(){
		return {
			defaultTime,
			time: 0,
			countDown: defaultTime,
			isTiming: false,
			timerMinutes: t.min,
			timerSeconds: t.sec,
			timer: setInterval(()=> {
				if (this.isTiming) {
					this.increment()
				}
			}, 1000),
		}
	},
	computed: {
		minutes(){
			return toMinutes(this.time);
		},
		seconds(){
			const secs = toSeconds(this.time);
			return secs < 60 ? secs : secs - (toMinutes(this.time) * 60);
		},
		secondsString() {
			return secondsString(this.seconds);
		},
	},
	components: {
		m_timer,
		a_totalTime,
	},
	methods: {
		restart(){
			this.reset();
			this.start();
		},
		reset() {
			this.time = 0;
			this.countDown = this.defaultTime;
			this.isTiming = false;
		},
		start(){
			this.isTiming = true;
			events.$emit('blur');
		},
		stop(){
			this.isTiming = false;
		},
		toggle(){
			this.isTiming ? this.stop() : this.start();
		},
		increment(){
			this.time = this.time + toMilliseconds({seconds: 1});
			this.countDown = this.countDown - toMilliseconds({seconds: 1});
		},
		setTime({minutes = this.timerMinutes, seconds = this.timerSeconds}){
			const newTime = toMilliseconds({minutes, seconds});
			Object.assign(this, {
				countDown: newTime,
				defaultTime: newTime,
				timerMinutes: parseInt(minutes),
				timerSeconds: parseInt(seconds),
			})
			localStorage.setItem('timer-minutes', minutes);
			localStorage.setItem('timer-seconds', seconds);
		},
	},
};

</script>

<style lang="scss" src="../main.scss"></style>

<style lang="scss">
.o-app {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;

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
	}

	&.isTiming {
		cursor: none;
	}
}
</style>
