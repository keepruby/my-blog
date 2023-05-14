<template>
	<ul class="right-list-container">
		<li v-for="item in list" :key="item.id">
			<span @click="toCategory(item)" :class="{ active: item.isSelect }">
				{{ item.name }}</span
			>
			<span
				v-if="item.aside"
				@click="toCategory(item)"
				:class="{ active: item.isSelect }"
				class="aside"
			>
				{{ item.aside }}</span
			>
			<!-- <RightList :list="i.children" /> -->
		</li>
	</ul>
</template>

<script>
export default {
	name: 'RightList',
	props: {
		list: {
			default: () => [],
			type: Array,
		},
	},
	methods: {
		toCategory(item) {
			if (!item.isSelect) {
				this.$emit('selectTo', item)
			}
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
.right-list-container {
	.right-list-container {
		margin-left: 1em;
	}
	padding: 0;
	li {
		min-height: 40px;
		line-height: 40px;
		font-size: 14px;
		cursor: pointer;
		.aside {
			font-size: 12px;
			margin-left: 1em;
			color: @gray;
		}
		.active {
			color: #dc6a12;
			font-weight: bold;
		}
	}
}
</style>
