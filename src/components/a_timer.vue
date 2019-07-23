
<template lang="pug">
	p.a-timer {{minutes}}:{{secondsString}}
</template>

<script>
import secondsString from '../helpers/secondsString';
import { seconds, minutes } from '../helpers/converters';

export default {
	props: ['time','countDown'],

	computed: {
		minutes(){
			return minutes(this.countDown) - minutes(this.time);
		},
		seconds(){
			return seconds(this.countDown) - (this.minutes * 60);
		},
		secondsString() {
			return secondsString(this.seconds);
		}
	},
}

</script>

<style lang="scss">
.a-timer {
	font-size: 20em;
	line-height: 1;
	margin: 0;
	margin-bottom: 0.3em;
	font-weight: bold;
}
</style>
