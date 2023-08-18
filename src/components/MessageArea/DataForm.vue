<template>
	<form class="data-form-container">
		<div class="form-item">
			<div class="input-area">
				<input type="text" placeholder="用户昵称" maxlength="10" />
				<span class="tip">0/10</span>
			</div>
			<div class="error">请填写昵称</div>
		</div>
		<div class="form-item">
			<div class="text-area">
				<textarea maxlength="300" placeholder="输入内容"></textarea>
				<span class="tip">0/300</span>
			</div>
			<div class="error">请填写内容</div>
		</div>
		<div class="form-item">
			<div class="button-area">
				<button>提交</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.data-form-container {
	margin-bottom: 20px;
	overflow: hidden;
	.form-item {
		margin-bottom: 18px;
		.input-area {
			width: 50%;
			position: relative;
		}
		.text-area {
			position: relative;
		}
		.tip {
			position: absolute;
			right: 5px;
			bottom: 5px;
			font-size: 12px;
			color: @gray;
		}
	}
	input,
	textarea {
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
		display: block;
		outline: none;
		border: 1px dashed @gray;
		color: @words;
		border-radius: 4px;
		font-size: 14px;
	}
	textarea {
		height: 120px;
		resize: none;
	}
	.error {
		margin-top: 6px;
		color: @danger;
		font-size: 14px;
		height: 20px;
		line-height: 20px;
	}
}
</style>
