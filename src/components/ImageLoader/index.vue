<template>
	<div class="image-loader-container">
		<img v-if="!allOk" :src="placeholder" alt="" class="placeholderImg" />
		<img
			@load="handleLoad"
			:src="src"
			alt=""
			:style="{
				opacity: originOpacity,
				transition: `${this.duration}ms`,
			}"
		/>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			require: true,
		},
		placeholder: {
			type: String,
			require: true,
		},
		duration: {
			type: Number,
			default: 500,
		},
	},
	data() {
		return {
			isLoad: false, //是否加载完成
			allOk: false,
		}
	},
	computed: {
		originOpacity() {
			return this.isLoad ? 1 : 0
		},
	},
	methods: {
		handleLoad() {
			this.isLoad = true
			setTimeout(() => {
				this.$emit('load')
				this.allOk = true
			}, this.duration)
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.image-loader-container {
	width: 100%;
	height: 100%;
	position: relative;
	img {
		.self-fill();
		object-fit: cover;
	}
	.placeholder {
		filter: blur(2vw);
	}
}
</style>
