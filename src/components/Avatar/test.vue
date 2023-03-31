<template>
	<div id="app">
		<Avatar
			url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg"
			:size="150"
		/>
		<Avatar
			url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"
			:size="200"
		/>
	</div>
</template>

<script>
import Avatar from './'
export default {
	components: {
		Avatar,
	},
}
</script>
