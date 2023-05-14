export default function (times) {
	// console.log(times)
	const time = new Date(+times)
	const y = time.getFullYear()
	const m = (time.getMonth() + 1).toString().padStart(2, '0')
	const d = time.getDate().toString().padStart(2, '0')

	return `${y}-${m}-${d}`
}
