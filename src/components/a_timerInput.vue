<template lang="pug">
	input.a-timerInput(type="number")
</template>

<style lang="scss">
	.a-timerInput {
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
</style>
