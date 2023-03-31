<template>
	<nav class="menu-container">
		<router-link
			:to="{ name: item.name }"
			v-for="item in items"
			:key="item.name"
			:exact="item.isExact"
			active-class="selected"
		>
			<div class="icon">
				<Icon :type="item.icon" />
			</div>
			<span>{{ item.title }}</span>
		</router-link>
	</nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	data() {
		return {
			items: [
				{
					name: 'Home',
					title: '首页',
					icon: 'home',
					isExact: true,
				},
				{
					name: 'Blog',
					title: '文章',
					icon: 'blog',
					isExact: false,
				},
				{
					name: 'About',
					title: '关于我',
					icon: 'about',
					isExact: true,
				},
				{
					name: 'Project',
					title: '项目&效果',
					icon: 'code',
					isExact: true,
				},
				{
					name: 'Message',
					title: '留言板',
					icon: 'chat',
					isExact: true,
				},
			],
		}
	},
	computed: {},
	methods: {
		// isSelected(item) {
		// 	const link = item.link.toLocaleLowerCase()
		// 	const pathname = location.pathname.toLocaleLowerCase()
		// 	if (item.startWith) {
		// 		return pathname.startsWith(link)
		// 	} else {
		// 		return pathname === link
		// 	}
		// },
	},
	components: {
		Icon,
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
.menu-container {
	margin: 24px 0;
	color: @gray;
	a {
		display: flex;
		padding: 0 50px;
		height: 45px;
		align-items: center;
		&.selected {
			background: darken(@words, 3%);
		}
		.icon {
			width: 24px;
		}
		&:hover {
			color: #fff;
		}
	}
}
</style>
