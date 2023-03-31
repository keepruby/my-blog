<template>
	<div id="app">
		<Pager :current="current" :total="500" @changPager="changPager" />
	</div>
</template>

<script>
import Pager from './'
export default {
	components: {
		Pager,
	},
	data() {
		return {
			current: 10,
		}
	},
	methods: {
		changPager(index) {
			console.log(index)
			this.current = index
		},
	},
}
</script>
