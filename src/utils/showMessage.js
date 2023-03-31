import getComponentRootDom from './getComponentRootDom'
import Icon from '@/components/Icon'
import styles from './index.module.less'
// console.log(getComponentRootDom(Icon, { type: 'error' }))

export default function (option = {}) {
	const content = option.content || ''
	const type = option.type || 'info'
	const duration = option.duration || 2000
	const container = option.container || document.body

	//创建div
	const div = document.createElement('div')
	//创建icon
	const iconItem = getComponentRootDom(Icon, { type })

	div.innerHTML = `<span class="${styles.icon}">${iconItem.outerHTML}</span><div>${content}</div>`
	const typeMessage = styles[`message-${type}`]
	div.className = `${styles.message} ${typeMessage}`
	if (option.container) {
		if (getComputedStyle(container).position === 'static') {
			container.style.position = 'relative'
		}
	}
	container.appendChild(div)

	div.clientHeight // 导致reflow
	// 回归到正常位置
	div.style.opacity = 1
	div.style.transform = `translate(-50%, -50%)`

	setTimeout(() => {
		div.style.opacity = 0
		div.style.transform = `translate(-50%, -50%) translateY(-25px)`
		div.addEventListener(
			'transitionend',
			function () {
				div.remove()
				option.callback && option.callback()
			},
			{ once: true }
		)
	}, duration)
}
