<template>
	<div class="home-container" @wheel="handleWheel">
		<ul
			class="carousel-container"
			ref="ul"
			:style="marginTop"
			@transitionend="handleEnd"
			v-loading="isLoading"
		>
			<li v-for="item in data" :key="item.id">
				<Carouselitem :carousel="item" />
			</li>
		</ul>
		<div
			class="icon icon-up"
			v-show="currIndex !== 0"
			@click="switchTo(currIndex - 1)"
		>
			<Icon type="arrowUp" />
		</div>
		<div
			class="icon icon-down"
			v-show="currIndex !== data.length - 1"
			@click="switchTo(currIndex + 1)"
		>
			<Icon type="arrowDown" />
		</div>
		<div class="indicator">
			<li
				v-for="(item, index) in data"
				:key="item.id"
				:class="{ active: currIndex === index }"
				@click="switchTo(index)"
			></li>
		</div>
	</div>
</template>

<script>
import axiosData from '@/mixins/axiosData'
import { getBanners } from '@/api/banner'
import Carouselitem from './Carouselitem'
import Icon from '@/components/Icon'
export default {
	mixins: [axiosData([])],
	data() {
		return {
			currIndex: 0,
			containerHeight: 0, //容器高度
			switching: false, //是否在滚动中
		}
	},
	computed: {
		marginTop() {
			return {
				marginTop: `-${this.currIndex * this.containerHeight}px`,
			}
		},
	},

	mounted() {
		this.containerHeight = this.$refs.ul.clientHeight
		window.addEventListener('resize', this.handleContainerHei)
	},
	destroyed() {
		window.removeEventListener('resize', this.handleContainerHei)
	},
	components: { Carouselitem, Icon },
	methods: {
		async axiosData() {
			return await getBanners()
		},
		switchTo(index) {
			if (index === this.currIndex) return
			this.currIndex = index

			console.log()
		},
		//拿到ul高度
		handleContainerHei() {
			this.containerHeight = this.$refs.ul.clientHeight
		},
		handleWheel(e) {
			// console.log(e.deltaY)
			//判断滚动的力度   向上翻  <-5  并且不能是第一页  向下翻  >5  并且不能是最后一页
			//正在翻页动画中 return
			if (this.switching) return

			if (e.deltaY < -5 && this.currIndex > 0) {
				//上
				this.currIndex--
				this.switching = true
			} else if (e.deltaY > 5 && this.currIndex < this.data.length - 1) {
				//下
				this.currIndex++
				this.switching = true
			}
		},
		handleEnd() {
			this.switching = false
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
.home-container {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	ul {
		margin: 0;
		list-style: none;
		padding: 0;
		transition: 0.8s;
	}
	.indicator {
		.self-center();
		right: 20px;
		left: auto;
		li {
			width: 7px;
			height: 7px;
			border-radius: 50%;
			background: #373737;
			cursor: pointer;
			margin-bottom: 10px;
			border: 1px solid #fff;
			box-sizing: border-box;
			&.active {
				background: #fff;
			}
		}
	}
	.icon {
		.self-center();
		font-size: 30px;
		color: @gray;
		cursor: pointer;
		&.icon-up {
			top: 25px;
			animation: jump-up 2s infinite;
		}
		&.icon-down {
			top: auto;
			bottom: 25px;
			animation: jump-down 2s infinite;
		}
	}
}
.carousel-container {
	width: 100%;
	height: 100%;
	position: relative;
	li {
		width: 100%;
		height: 100%;
	}
}
@keyframes jump-up {
	0% {
		transform: translate(-50%, 5px);
	}
	50% {
		transform: translate(-50%, -5px);
	}
	100% {
		transform: translate(-50%, 5px);
	}
}
@keyframes jump-down {
	0% {
		transform: translate(-50%, -5px);
	}
	50% {
		transform: translate(-50%, 5px);
	}
	100% {
		transform: translate(-50%, -5px);
	}
}
</style>
