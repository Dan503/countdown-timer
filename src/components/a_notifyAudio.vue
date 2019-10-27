<template lang="pug">
audio.a_notifyAudio(preload="auto" :data-timeleft="timeLeft")
	source(src="sound/alien-alert-notification.mp3" type="audio/mpeg")
	source(src="sound/alien-alert-notification.ogg" type="audio/ogg")
</template>

<script>
export default {
	props: ["timeLeft"],
	mounted() {
		this.$audio = this.$el;
	},
	updated() {
		if (this.isOutOfTime()) {
			this.$audio.play();
		}
	},
	methods: {
		isOutOfTime() {
			return this.timeLeft === 0;
		},
	},
};
</script>

<style lang="scss">
.a_notifyAudio {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}
</style>
