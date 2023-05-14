<template>
	<div class="BlogDetail-container">
		<h1>{{ blog.title }}</h1>
		<div class="aside">
			<span>日期: {{ formatDate(blog.createDate) }}</span>
			<span>浏览: {{ blog.scanNumber }}</span>
			<a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
			<a href="">{{ blog.category.name }}</a>
		</div>
		<div v-html="blog.htmlContent" class="markdown-body"></div>
	</div>
</template>

<script>
import 'highlight.js/styles/github.css'
import '@/styles/markdown.css'
import formatDate from '@/utils/formatDate'
export default {
	props: {
		blog: {
			type: Object,
			required: true,
		},
	},
	methods: {
		formatDate,
	},
	mounted() {
		console.log(this.blog)
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.aside {
	font-size: 12px;
	color: @gray;
	a,
	span {
		margin-right: 15px;
	}
}
.markdown-body {
	margin: 2em 0;
}
</style>
