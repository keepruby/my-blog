import axios from 'axios'
import showMessage from '../utils/showMessage'

const http = axios.create()

http.interceptors.response.use(function (response) {
	if (response.data.code !== 0) {
		showMessage({
			content: response.data.msg,
			type: 'error',
			duration: 1500,
		})
		return null
	}
	return response.data.data
})

export default http
