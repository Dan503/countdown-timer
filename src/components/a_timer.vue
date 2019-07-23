
<template lang="pug">
	p.a-timer {{timerMinutes}}:{{secondsString}}
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
}
</style>
