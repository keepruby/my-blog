<template>
	<div>
		<RightList :list="list" />
	</div>
</template>

<script>
import RightList from './RightList'
export default {
	data() {
		return {
			list: [
				{
					id: 1,
					name: '分类1',
					articleCount: 10,
					order: 1,
					children: [
						{
							id: 1.1,
							name: '分类1',
							articleCount: 10,
							order: 2,
						},
						{
							id: 1.2,
							name: '分类1',
							articleCount: 10,
							order: 2,
						},
						{
							id: 1.3,
							name: '分类1',
							articleCount: 10,
							order: 2,
						},
						{
							id: 1.4,
							name: '分类1',
							articleCount: 10,
							order: 2,
						},
					],
				},
				{
					id: 2,
					name: '分类2',
					articleCount: 10,
					order: 2,
				},
				{
					id: 3,
					name: '分类3',
					articleCount: 10,
					order: 3,
				},
			],
		}
	},
	components: {
		RightList,
	},
}
</script>

<style lang="less" scoped></style>
