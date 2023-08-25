import request from './'

export async function getCategory() {
	return await request.get('/api/blogtype')
}
export async function getBlogs(
	params = { page: 1, limit: 10, categoryid: -1 }
) {
	return await request.get('/api/blog', { params })
}

export async function getBlog(id) {
	return await request.get('/api/blog/${id}')
}
/**
 * 提交评论
 *
 *
 */
export async function postComment(commentInfo) {
	return await request.post('/api/comment', commentInfo)
}
/**
 * 分页获取评论
 *
 *
 */
export async function getComments(blogid, page = 1, limit = 10) {
	return await request.get('/api/comment', {
		params: {
			blogid,
			page,
			limit,
		},
	})
}
