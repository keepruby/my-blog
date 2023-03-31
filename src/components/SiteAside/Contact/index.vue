<template>
	<ul class="contact-container">
		<li>
			<a href="https://github.com/keepruby" target="_blank">
				<Icon class="icon" type="github" />
				<span>keepruby</span>
			</a>
		</li>
		<li>
			<a href="keepruby@163.com" target="_blank">
				<Icon class="icon" type="mail" />
				<span>keepruby@163.com</span>
			</a>
		</li>
		<li>
			<a
				href="tencent://message/?Menu=yes&uin=2606952639&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
			>
				<Icon class="icon" type="qq" />
				<span>2606952639</span>
			</a>
			<div class="pop">
				<img src="http://www.cbimc.cn/image/20210928c1.png" alt="" />
			</div>
		</li>
		<li>
			<a>
				<Icon class="icon" type="weixin" />
				<span>q</span>
			</a>
			<div class="pop">
				<img src="http://www.cbimc.cn/image/20210928c1.png" alt="" />
			</div>
		</li>
	</ul>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	components: {
		Icon,
	},
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
@itemHeight: 30px;
.contact-container {
	padding: 20px;
	color: @gray;
	li {
		position: relative;
		margin: 14px 0;
		height: @itemHeight;
		line-height: @itemHeight;
		&:hover {
			.pop {
				transform: scaleY(1);
			}
		}
		.pop {
			position: absolute;
			padding: 10px 15px;
			background: #fff;
			border-radius: 8px;
			bottom: @itemHeight+5;
			left: 0;
			box-sizing: border-box;
			transform: scaleY(0);
			transition: 0.3s;
			transform-origin: center bottom;
			img {
				width: 150px;
				height: 150px;
			}
			&::after {
				position: absolute;
				width: 10px;
				height: 10px;
				content: '';
				background: #fff;
				bottom: -5px;
				left: 50%;
				transform: translateX(-50%) rotate(45deg);
			}
		}
		a {
			cursor: pointer;
			font-size: 14px;
			display: flex;
			align-items: center;
			.icon {
				width: 36px;
				font-size: 26px;
			}
		}
	}
}
</style>
