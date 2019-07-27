
<template lang="pug">
	.a-timer
		input.a-timer__input.-minutes(
			type="number"
			:value="timerMinutes"
			title="Minutes"
			:style="{width: minutesAreWide ? '3ch' : '2ch', textAlign: 'right'}"
		)
		| :
		input.a-timer__input.-seconds(
			type="number"
			:value="secondsString"
			title="Seconds"
		)
</template>

<script>
import secondsString from '../helpers/secondsString';
import { seconds, minutes } from '../helpers/converters';

export default {
	props: ['availableMinutes','minutes','seconds'],

	computed: {
		timerMinutes(){
			const hasSeconds = this.seconds != 0;
			const mins = this.availableMinutes - this.minutes;
			const pos_mins = hasSeconds ? mins - 1 : mins;
			const neg_mins = mins == 0 ? `-0` : mins;
			return mins > 0 ? pos_mins : neg_mins;
		},
		timerSeconds(){
			const isPositive = this.timerMinutes !== '-0' && this.timerMinutes >= 0;
			const secs = isPositive ? 60 - this.seconds : this.seconds;
			return secs == 60 ? 0 : secs;
		},
		secondsString() {
			return secondsString(this.timerSeconds);
		},
		minutesAreWide(){
			return !isNaN(this.timerMinutes) && this.timerMinutes > 9
		}
	},
}

</script>

<style lang="scss">
.a-timer {
	font-size: 20em;
	line-height: 1;
	margin: 0;
	margin-bottom: 0.1em;
	font-weight: bold;

	display: flex;
	justify-content: center;

	&__input {
		font-size: 1em;
		background: transparent;
		color: inherit;
		width: 3ch;
		border: 2px solid transparent;
		-moz-appearance: textfield;
		transition: border-color 0.3s;

		&:hover, &:focus {
			border-color: #ccc;
		}

		&::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
		}

}
}
</style>
