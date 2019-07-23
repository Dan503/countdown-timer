
<template lang="pug">
	.a-totalTime
		h2.a-totalTime__label Total time:
		p.a-totalTime__time {{minutes}}:{{secondsString}}
</template>

<script>
import secondsString from '../helpers/secondsString';
import { seconds, minutes } from '../helpers/converters';

export default {
	props: ['time'],

	computed: {
		minutes(){
			return minutes(this.time);
		},
		seconds(){
			const secs = seconds(this.time);
			return secs < 60 ? secs : secs - (minutes(this.time) * 60);
		},
		secondsString() {
			return secondsString(this.seconds);
		}
	},
}

</script>

<style lang="scss">
.a-totalTime {
	line-height: 1;
	margin: 0;
	font-weight: bold;

	&__label {
		font-size: 3em;
		display: block;
		margin: 0;
		margin-bottom: 0.5em;
	}

	&__time {
		font-size: 7em;
		margin: 0;
	}
}
</style>
