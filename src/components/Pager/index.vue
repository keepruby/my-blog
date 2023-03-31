<template>
	<div class="pager-container">
		<a :class="{ disabled: current === 1 }" @click="handleClick(1)"
			>|&lt;&lt;</a
		>
		<a
			:class="{ disabled: current === 1 }"
			@click="handleClick(current - 1)"
			>&lt;&lt;</a
		>
		<a
			v-for="(i, v) in numbers"
			:key="v"
			:class="{ active: current === i }"
			@click="handleClick(i)"
			>{{ i }}</a
		>

		<a
			:class="{ disabled: current === pageNumber }"
			@click="handleClick(current + 1)"
			>&gt;&gt;</a
		>
		<a
			:class="{ disabled: current === pageNumber }"
			@click="handleClick(pageNumber)"
			>&gt;&gt;|</a
		>
	</div>
</template>

<script>
export default {
	props: {
		current: {
			default: 1,
			type: Number,
		},
		total: {
			default: 0,
			type: Number,
		},
		limit: {
			default: 10,
			type: Number,
		},
		visibleNumber: {
			default: 10,
			type: Number,
		},
	},
	computed: {
		pageNumber() {
			return Math.ceil(this.total / this.limit)
		},
		visibleMin() {
			let min = this.current - Math.floor(this.visibleNumber / 2)
			if (min < 1) {
				min = 1
			}
			return min
		},
		visibleMax() {
			let max = this.visibleMin + this.visibleNumber - 1
			if (max > this.pageNumber) {
				max = this.pageNumber
			}
			return max
		},
		numbers() {
			let nums = []
			for (let i = this.visibleMin; i <= this.visibleMax; i++) {
				nums.push(i)
			}
			return nums
		},
	},
	methods: {
		handleClick(index) {
			if (index < 1) {
				index = 1
			}
			if (index > this.pageNumber) {
				index = this.pageNumber
			}
			if (index === this.current) {
				return
			}
			this.$emit('changPager', index)
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.pager-container {
	display: flex;
	justify-content: center;
	align-content: center;
	margin: 20px 0;

	a {
		color: @primary;
		margin: 0 6px;
		cursor: pointer;
		&.active {
			color: @words;
			font-weight: bold;
			cursor: text;
		}
		&.disabled {
			color: @lightWords;
			cursor: not-allowed;
		}
	}
}
</style>
