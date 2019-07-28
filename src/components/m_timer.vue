
<template lang="pug">
	.m-timer
		a_timerInput(
			:value="timerMinutes",
			type="minutes",
			:styles="{width: minutesAreWide ? '2ch' : '1ch', textAlign: 'right'}"
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
	props: ['availableMinutes','minutes','seconds'],

	components: { a_timerInput },

	mounted() {
		this.$minutes = this.$el.querySelector('input[title="minutes"]')
		this.$seconds = this.$el.querySelector('input[title="seconds"]')
	},

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
