
<template lang="pug">
	.m-timer
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
import secondsString from '../helpers/secondsString';
import { seconds, minutes } from '../helpers/converters';
import a_timerInput from './a_timerInput'

export default {
	props: ['availableMinutes','availableSeconds','minutes','seconds'],

	components: { a_timerInput },

	mounted() {
		this.$minutes = this.$el.querySelector('input[title="minutes"]')
		this.$seconds = this.$el.querySelector('input[title="seconds"]')
	},

	computed: {
		timerMinutes(){
			const hasSeconds = this.seconds != 0;
			const hasTimerSeconds = this.availableSeconds != 0;
			const timerMins = this.availableMinutes - this.minutes;
			const timerSecs = this.availableSeconds - this.seconds;

			const pos_mins = hasSeconds && timerSecs < 0 ? timerMins - 1 : timerMins;

			// debugger;
			// const neg_mins = timerSecs < 60;
			// TO DO: negative minutes not working yet!
			const neg_mins = timerMins == 0 && timerSecs < 0 ? `-0` : timerMins;
			return timerMins > 0 ? pos_mins : neg_mins;
		},
		timerSeconds(){
			const isPositive = this.timerMinutes !== '-0' && this.timerMinutes >= 0;
			const difference = isPositive ? this.availableSeconds - this.seconds : this.seconds - this.availableSeconds;

			const secs = difference >= 0 ? difference : difference + 60;
			return secs == 60 ? 0 : secs;
		},
		secondsString() {
			return secondsString(this.timerSeconds);
		},
		minutesWidth(){
			const timerMinString = `${this.timerMinutes}`;
			const isNegative = timerMinString[0] === '-';
			const length = timerMinString.length;
			return `${isNegative ? length - 0.4 : length}ch`;
		},
	},
	methods: {
		preventSideArrows(e){
			if (['ArrowRight', 'ArrowLeft'].includes(e.key)){
				e.preventDefault();
			}
		},
		handleMinutesKeyPress(e){
			this.preventSideArrows(e);
			if (e.key == 'ArrowRight'){
				this.focusSeconds();
			}
		},
		handleSecondsKeyPress(e){
			this.preventSideArrows(e);
			if (e.key == 'ArrowLeft'){
				this.focusMinutes();
			}
		},
		focusMinutes(){
			this.$minutes.focus();
			console.log('focus min');
		},
		focusSeconds(){
			this.$seconds.focus();
			console.log('focus sec');
		}
	}
}

</script>

<style lang="scss">
.m-timer {
	font-size: 20em;
	line-height: 1;
	margin: 0;
	margin-bottom: 0.1em;
	font-weight: bold;
	display: flex;
	justify-content: center;
}
</style>
