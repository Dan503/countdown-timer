
<template lang="pug">
	.m-timer(:class="{overTime: isOverTime}")
		a_timerInput(
			:value="timerMinutes",
			type="minutes",
			:styles="{width: minutesWidth, textAlign: 'right'}"
			@onKey="handleMinutesKeyPress"
		)
		| :
		a_timerInput(
			:value="secondsString"
			type="seconds"
			@onKey="handleSecondsKeyPress"
		)
</template>

<script>
import secondsString from '../helpers/secondsString'
import { toSeconds, toMinutes, toMilliseconds } from '../helpers/converters'

import a_timerInput from './a_timerInput'

export default {
	props: [
		'availableMinutes',
		'availableSeconds',
		'minutes',
		'seconds',
		'timeLeft',
	],

	components: { a_timerInput },

	mounted() {
		this.$minutes = this.$el.querySelector('input[title="minutes"]')
		this.$seconds = this.$el.querySelector('input[title="seconds"]')
	},

	computed: {
		isOverTime() {
			return this.timeLeft <= 0
		},
		timerMinutes() {
			const timerMins = this.availableMinutes - this.minutes

			const availableTime = toMilliseconds({
				minutes: this.availableMinutes,
				seconds: this.availableSeconds,
			})
			const spentTime = toMilliseconds({
				minutes: this.minutes,
				seconds: this.seconds,
			})

			const calculate_pos_mins = () => {
				const hasSeconds = this.seconds != 0
				const hasTimerSeconds = this.availableSeconds != 0
				const timerSecs = this.availableSeconds - this.seconds
				return hasSeconds && timerSecs < 0 ? timerMins - 1 : timerMins
			}

			const calculate_neg_mins = () => {
				const timeDifference = availableTime - spentTime
				const minuteDifference = toMinutes(timeDifference)
				return minuteDifference == 0 ? '-0' : minuteDifference
			}

			return spentTime > availableTime
				? calculate_neg_mins()
				: calculate_pos_mins()
		},
		timerSeconds() {
			const isPositive =
				this.timerMinutes !== '-0' && this.timerMinutes >= 0
			const difference = isPositive
				? this.availableSeconds - this.seconds
				: this.seconds - this.availableSeconds

			const secs = difference >= 0 ? difference : difference + 60
			return secs == 60 ? 0 : secs
		},
		secondsString() {
			return secondsString(this.timerSeconds)
		},
		minutesWidth() {
			const timerMinString = `${this.timerMinutes}`
			const isNegative = timerMinString[0] === '-'
			const length = timerMinString.length
			return `${isNegative ? length - 0.4 : length}ch`
		},
	},
	methods: {
		preventSideArrows(e) {
			if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
				e.preventDefault()
			}
		},
		handleMinutesKeyPress(e) {
			this.preventSideArrows(e)
			if (e.key == 'ArrowRight') {
				this.focusSeconds()
			}
		},
		handleSecondsKeyPress(e) {
			this.preventSideArrows(e)
			if (e.key == 'ArrowLeft') {
				this.focusMinutes()
			}
		},
		focusMinutes() {
			this.$minutes.focus()
		},
		focusSeconds() {
			this.$seconds.focus()
		},
	},
}
</script>

<style lang="scss">
@import '../vars.scss';

.m-timer {
	line-height: 1.2;
	margin: 0;
	margin-bottom: 0.1em;
	font-weight: bold;
	display: flex;
	justify-content: center;
	transition: color 0.5s;

	&.overTime {
		color: #f16363;
	}

	@media (min-width: $bp-medium + 1) and (min-height: 400px) {
		font-size: 20em;
	}

	@media (max-width: $bp-medium) and (min-height: 400px) {
		font-size: 7em;
	}

	@media (max-width: $bp-small) and (min-height: 400px) {
		font-size: 4em;
	}

	@media (max-width: $bp-tiny) and (min-height: 600px) {
		transform: rotate(-90deg) translateX(100px);
	}
}
</style>
