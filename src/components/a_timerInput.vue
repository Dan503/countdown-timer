<template lang="pug">
	div.a-timerInput
		input.a-timerInput__input(
			type="number",
			:title="type",
			:value="value",
			:style="styles",
			@click="onClick()",
			@focus="onFocus()",
			@input="onInput()",
			@scroll.prevent="",
			@keydown="onKey",
		)
		.a-timerInput__message(aria-hidden="true") ⇧ ⇩ Arrow keys
</template>

<script>
import events from '../helpers/global_events'

export default {
	props: ['type', 'value', 'styles'],
	mounted() {
		this.$elem = this.$el.children[0]
		events.$on('blur', () => this.$elem.blur())
	},
	methods: {
		onKey(e) {
			this.$emit('onKey', e)
		},
		onClick() {
			this.selectAll()
		},
		onFocus() {
			events.$emit('reset')
			this.selectAll()
		},
		onInput() {
			const actions = {
				minutes: () => this.minutesInput(),
				seconds: () => this.secondsInput(),
			}
			actions[this.type]()
			events.$emit('input', { type: this.type, val: this.$elem.value })
		},
		minutesInput() {
			const val = this.$elem.value
			if (val == '' || val < 0) {
				this.$elem.value = 0
			}
			if (val > 99) {
				this.$elem.value = '99'
			}
		},
		secondsInput() {
			const val = parseInt(this.$elem.value)

			if (isNaN(val) || val > 59) {
				this.$elem.value = '00'
			} else if (val < 0) {
				this.$elem.value = 59
			} else if (val < 10) {
				this.$elem.value = `0${val}`
			} else {
				this.$elem.value = val
			}
		},
		selectAll() {
			this.$elem.type = 'text'
			this.$elem.setSelectionRange(0, this.$elem.value.length)
			this.$elem.type = 'number'
		},
	},
}
</script>


<style lang="scss">
.a-timerInput {
	position: relative;

	&__input {
		font-size: 1em;
		font-weight: bold;
		background: transparent;
		color: inherit;
		width: 2ch;
		box-sizing: content-box;
		border: 2px solid transparent;
		-moz-appearance: textfield;
		transition: border-color 0.3s;

		&:hover,
		&:focus {
			border-color: #ccc;
		}

		&:focus + div {
			opacity: 1;
		}

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&::selection {
			background: #fff;
			color: #000;
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

		@media (max-height: 300px) {
			display: none;
		}
	}
}
</style>
