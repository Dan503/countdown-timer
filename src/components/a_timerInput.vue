<template lang="pug">
	div.a-timerInput
		input.a-timerInput__input(
			type="number",
			:title="type",
			:value="value",
			:style="styles",
			@focus="onFocus()",
			@input="onInput()",
			@scroll.prevent=""
		)
		.a-timerInput__message(aria-hidden="true") ⇧ ⇩ Arrow keys
</template>

<script>
import events from '../helpers/global_events';

export default {
	props: ['type', 'value', 'styles'],
	mounted(){
		this.$elem = this.$el.children[0];
		events.$on('blur', ()=> this.$elem.blur());
	},
	methods: {
		onFocus(){
			events.$emit('reset');
		},
		onInput(){
			const actions = {
				minutes: ()=> this.minutesInput(),
				seconds: ()=> this.secondsInput(),
			}
			actions[this.type]();
		},
		minutesInput(){
			const val = this.$el.value;
		},
		secondsInput(){
			const val = this.$el.value;

			if (val > 59) {
				this.$el.value = '00';

			} else if (val < 0) {
				this.$el.value = 59;

			} else if (val < 10) {
				this.$el.value = `0${val}`
			}
		}
	}
}
</script>


<style lang="scss">
	.a-timerInput {
		position: relative;

		&__input {
			font-size: 1em;
			background: transparent;
			color: inherit;
			width: 2ch;
			box-sizing: content-box;
			border: 2px solid transparent;
			-moz-appearance: textfield;
			transition: border-color 0.3s;

			&:hover, &:focus {
				border-color: #ccc;
			}

			&:focus + div {
				opacity: 1;
			}

			&::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
			}
		}

		&__message {
			position: absolute;
			bottom: calc(100% + 1rem);
			left: 0;
			right: 0;
			display: block;
			text-align: center;
			font-size: 2rem;
			opacity: 0;
			transition: opacity 0.3s;
		}
	}
</style>
