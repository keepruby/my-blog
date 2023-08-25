<template>
	<div class="message-area-container">
		<DataForm />
		<h3>
			{{ title }}
			<span>({{ subTitle }})</span>
		</h3>
		<DataList :list="list" />
	</div>
</template>

<script>
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'
export default {
	components: {
		DataForm,
		DataList,
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		subTitle: {
			type: Number,
			default: 0,
		},
		list: {
			type: Array,
			default: [],
		},
	},
}
</script>

<style lang="less" scoped></style>
