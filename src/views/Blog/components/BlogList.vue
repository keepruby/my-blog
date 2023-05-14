<template>
	<div class="blog-list-container" v-loading="isLoading" ref="blogList">
		<ul>
			<li v-for="item in data.rows" :key="item.id">
				<div class="thumb">
					<router-link
						:to="{
							name: 'BlogDetail',
							params: {
								id: item.id,
							},
						}"
					>
						<img :src="item.thumb" alt="" />
					</router-link>
				</div>
				<div class="main">
					<router-link
						:to="{
							name: 'BlogDetail',
							params: {
								id: item.id,
							},
						}"
					>
						<h2 class="title">{{ item.title }}</h2>
					</router-link>
					<div class="info">
						<span>日期：{{ formatDate(item.createDate) }}</span>
						<span>浏览：{{ item.scanNumber }}</span>
						<span>评论：{{ item.commentNumber }}</span>
						<router-link
							:to="{
								name: 'CategoryBlog',
								params: {
									categoryId: item.category.id,
								},
							}"
						>
							<span>分类6</span>
						</router-link>
					</div>
					<div class="content">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
		<Pager
			v-if="data.total"
			:current="routeInfo.page"
			:visibleNumber="10"
			:total="data.total"
			:limit="routeInfo.limit"
			@changPager="changPager"
		/>
	</div>
</template>

<script>
import formatDate from '@/utils/formatDate'
import axiosData from '@/mixins/axiosData'
import { getBlogs } from '@/api/blog'
import Pager from '@/components/Pager'
export default {
	mixins: [axiosData({})],
	components: {
		Pager,
	},
	computed: {
		routeInfo() {
			const categoryId = +this.$route.params.categoryId || -1
			const page = +this.$route.query.page || 1
			const limit = +this.$route.query.limit || 10
			return {
				categoryId,
				page,
				limit,
			}
		},
	},
	methods: {
		formatDate,
		async axiosData() {
			return await getBlogs()
		},
		changPager(e) {
			const query = {
				limit: this.routeInfo.limit,
				page: e,
			}
			if (this.routeInfo.categoryId === -1) {
				this.$router.push({
					name: 'Blog',
					query,
				})
			} else {
				this.$router.push({
					name: 'CategoryBlog',
					query,
					params: {
						categoryId: this.routeInfo.categoryId,
					},
				})
			}
		},
	},
	watch: {
		async $route() {
			this.isLoading = true
			this.$refs.blogList.scrollTop = 0

			this.data = await this.axiosData()
			this.isLoading = false
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
.blog-list-container {
	line-height: 1.7;
	position: relative;
	padding: 20px;
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	scroll-behavior: smooth;
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		li {
			display: flex;
			border-bottom: 1px solid @gray;
			padding: 15px 0;
			.thumb {
				flex: 0 0 auto;
				margin-right: 15px;
				img {
					display: block;
					max-width: 200px;
					border-radius: 5px;
				}
			}
			.main {
				flex: 1 1 auto;
				.title {
					margin: 0;
				}
				.info {
					font-size: 12px;
					color: @gray;
					span {
						margin-right: 15px;
					}
				}
				.content {
					margin: 15px 0;
					font-size: 14px;
				}
			}
		}
	}
}
</style>
