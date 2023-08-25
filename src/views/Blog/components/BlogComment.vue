<template>
	<div>
		<MessageArea
			title="评论列表"
			:subTitle="data.total"
			:list="data.rows"
		/>
	</div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import axiosData from '@/mixins/axiosData.js'
import { getComments } from '@/api/blog.js'
export default {
	mixins: [axiosData({ total: 0, rows: [] })],
	components: {
		MessageArea,
	},
	data() {
		return {
			page: 1,
			limit: 10,
		}
	},
	mounted() {},
	methods: {
		async axiosData() {
			return await getComments(
				this.$route.params.id,
				this.page,
				this.limit
			)
		},
	},
}
</script>

<style lang="less" scoped></style>
