import styles from './loading.module.less'
import loadingUrl from '@/assets/loading.svg'

function getImage(el) {
	return el.querySelector('img[data-role=loading]')
}

//创建loading图片
function createImage() {
	const img = document.createElement('img')
	img.src = loadingUrl
	img.dataset.role = 'loading'
	img.className = styles.img
	return img
}

export default function (el, binding) {
	// 该函数会被同时设置到bind和update中
	// console.log(el, binding)
	const curImg = getImage(el)

	if (binding.value) {
		if (!curImg) {
			const img = createImage()
			el.appendChild(img)
		}
	} else {
		if (curImg) {
			curImg.remove()
		}
	}
}
