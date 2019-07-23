<template lang="pug">
	.o-app#app
		header.o-app__header
			h1.o-app__title Count down timer

		main.o-app__main
			.o-app__resetWrap
				a_timer(:countDown="countDown" :time="time")
				p.o-app__instructions Press space to start/stop; Press backspace to reset.
		footer.o-app__footer
			a_totalTime(:time="time")
</template>

<script>
import events from '../helpers/global_events.js';
import a_timer from './a_timer';
import a_totalTime from './a_totalTime';

const defaultTime = time({minutes: 5});

export default {
	mounted(){
		this.reset();

		document.documentElement.addEventListener('keyup', (e)=> {
			const fn = {
				Space: ()=> this.toggle(),
				Backspace: ()=> this.reset(),
			}
			if (fn[e.code]) fn[e.code]();
		})

		document.documentElement.addEventListener('mouseup', (e)=> this.toggle() )

	},
	data(){
		return {
			defaultTime,
			time: 0,
			countDown: defaultTime,
			isTiming: false,
			timer: setInterval(()=> {
				if (this.isTiming) {
					this.increment()
				}
			}, 1000),
		}
	},
	computed: {
	},
	components: {
		a_timer,
		a_totalTime,
	},
	methods: {
		reset() {
			this.time = 0;
			this.countDown = defaultTime;
			this.isTiming = false;
		},
		start(){
			this.isTiming = true;
		},
		stop(){
			this.isTiming = false;
		},
		toggle(){
			this.isTiming ? this.stop() : this.start();
		},
		increment(){
			this.time = this.time + time({seconds: 1});
			this.countDown = this.countDown - time({seconds: 1});
		}
	},
};

function time ({minutes = 0, seconds = 0}) {
	const sec = n => n * 1000;
	const min = n => sec(n) * 60;
	return min(minutes) + sec(seconds);
}

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
}
</style>
