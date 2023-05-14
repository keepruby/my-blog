<template>
	<div
		class="carousel-item-container"
		ref="container"
		@mousemove="handleMouseMove"
		@mouseleave="handleMouseLeave"
	>
		<div class="carousel-img" :style="imgStyle" ref="img">
			<ImageLoader
				:src="carousel.bigImg"
				:placeholder="carousel.midImg"
				@load="showWords"
			/>
		</div>
		<div class="title" ref="title">{{ carousel.title }}</div>
		<div class="desc" ref="desc">{{ carousel.description }}</div>
	</div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
	props: ['carousel'],
	components: {
		ImageLoader,
	},
	data() {
		return {
			titleWidth: 0,
			descWidth: 0,
			mouseX: 0,
			mouseY: 0,
			containerSize: null,
			imgSize: null,
		}
	},
	computed: {
		imgStyle() {
			if (!this.imgSize && !this.containerSize) return
			const moreWidth = this.imgSize.width - this.containerSize.width
			const moreHeight = this.imgSize.height - this.containerSize.height
			const left = -(moreWidth / this.containerSize.width) * this.mouseX
			const top = -(moreHeight / this.containerSize.height) * this.mouseY
			return {
				transform: `translate(${left}px, ${top}px)`,
			}
		},
		//默认鼠标在中间
		center() {
			return {
				x: this.containerSize.width / 2,
				y: this.containerSize.height / 2,
			}
		},
	},
	mounted() {
		this.titleWidth = this.$refs.title.clientWidth
		this.descWidth = this.$refs.desc.clientWidth

		this.setSize()

		this.mouseX = this.center.x
		this.mouseY = this.center.y
		window.addEventListener('resize', this.setSize)
	},
	destroyed() {
		window.removeEventListener('resize', this.setSize)
	},
	methods: {
		showWords() {
			this.$refs.title.style.opacity = 1
			this.$refs.title.style.width = 0
			this.$refs.title.clientWidth
			this.$refs.title.style.transition = '1s'
			this.$refs.title.style.width = this.titleWidth + 'px'

			this.$refs.desc.style.opacity = 1
			this.$refs.desc.style.width = 0
			this.$refs.desc.clientWidth
			this.$refs.desc.style.transition = '2s 1s'
			this.$refs.desc.style.width = this.descWidth + 'px'
		},
		handleMouseMove(e) {
			const reactContainer = this.$refs.container.getBoundingClientRect()
			this.mouseX = e.clientX - reactContainer.left
			this.mouseY = e.clientY - reactContainer.top
		},
		setSize() {
			this.containerSize = {
				width: this.$refs.container.clientWidth,
				height: this.$refs.container.clientHeight,
			}
			this.imgSize = {
				width: this.$refs.img.clientWidth,
				height: this.$refs.img.clientHeight,
			}
		},
		handleMouseLeave() {
			this.mouseX = this.center.x
			this.mouseY = this.center.y
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.carousel-item-container {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	.carousel-img {
		width: 110%;
		height: 110%;
		z-index: -1;
		position: relative;
		transition: 0.3s;
	}
	@textLeft: 50%;
	.title,
	.desc {
		position: absolute;
		color: #fff;
		letter-spacing: 3px;
		left: 30px;
		white-space: nowrap;
		text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
			0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
		overflow: hidden;
		opacity: 0;
	}
	.title {
		font-size: 2em;
		top: calc(@textLeft - 25px);
	}
	.desc {
		top: calc(@textLeft + 40px);
		font-size: 1.2em;
	}
}
</style>
