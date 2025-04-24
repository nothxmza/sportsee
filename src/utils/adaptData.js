export const adaptPerformance = ({data}) => {
	const adaptedData = {
		userId: data.userId,
		data: data.data.map((i) => ({
			value: i.value,
			kind: data.kind[i.kind],
		})),
	}
	return adaptedData;
}