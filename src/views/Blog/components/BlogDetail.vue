<template>
	<div class="BlogDetail-container">
		<h1>{{ blog.title }}</h1>
		<div class="aside">
			<span>日期: {{ formatDate(blog.createDate) }}</span>
			<span>浏览: {{ blog.scanNumber }}</span>
			<a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
			<a href="">{{ blog.category.name }}</a>
		</div>
	</div>
</template>

<script>
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
		console.log(6)
	},
}
</script>

<style lang="less" scoped></style>
