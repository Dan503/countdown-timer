
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
@import '../vars.scss';

.a-totalTime {
	line-height: 1;
	margin: 0;
	font-weight: bold;

	&__label {
		font-size: 3em;
		display: block;
		margin: 0;
		margin-bottom: 0.5em;

		@media (max-height: 400px) {
			display: none;
		}
	}

	&__time {
		margin: 0;

		@media (min-width: $bp-medium + 1) and (min-height: 400px) {
			font-size: 7em;
		}

		@media (max-width: $bp-medium) and (min-height: 400px) {
			font-size: 4em;
		}

		@media (max-height: 400px) {
			margin-top: -3px;
			&::before,
			&::after {
				display: inline-block;
				position: relative;
				top: -3px;
			}
			&::before {
				content: ' (';
			}
			&::after {
				content: ')';
			}
		}
	}

	@media (max-width: $bp-tiny) and (min-height: 600px) {
		writing-mode: vertical-rl;
		display: flex;
		align-items: center;
		transform: rotate(180deg) translateY(-100px);
		font-size: 0.7em;
	}
}
</style>
