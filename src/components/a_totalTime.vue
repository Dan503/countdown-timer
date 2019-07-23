
<template lang="pug">
	.a-totalTime
		h2.a-totalTime__label Total time:
		p.a-totalTime__time {{minutes}}:{{seconds}}
</template>

<script>
export default {
	props: ['seconds', 'minutes'],
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
