import request from './'

export async function getBanners() {
	return await request.get('/api/banner')
}
