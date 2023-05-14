<template>
	<div class="site-aside-container">
		<Aavtar
			url="https://avatars.githubusercontent.com/u/72647804?v=4"
			:size="150"
		/>
		<h1 class="title">q的个人空间</h1>
		<Menu />
		<Contact />
		<p class="footer">黑ICP备17001719号</p>
	</div>
</template>

<script>
import Aavtar from '@/components/Avatar'
import Contact from './Contact'
import Menu from './Menu'
export default {
	components: {
		Aavtar,
		Contact,
		Menu,
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.site-aside-container {
	width: 100%;
	height: 100%;
	padding: 20px 0;
	box-sizing: border-box;
	overflow: hidden;
	background: @dark;
	.avatar-container {
		margin: 0 auto;
	}
	.title {
		font-size: 20px;
		color: #fff;
		text-align: center;
	}
	.footer {
		text-align: center;
		font-size: 12px;
	}
}
</style>
