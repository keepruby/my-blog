export default function (defaultData = null) {
	return {
		data() {
			return {
				isLoading: true,
				data: defaultData,
			}
		},
		async created() {
			this.data = await this.axiosData()
			this.isLoading = false
		},
	}
}
