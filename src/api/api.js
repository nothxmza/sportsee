export const Api = {
	async getUserData (userId){
		const response = await fetch(`http://localhost:3000/user/${userId}`);
		const data = await response.json();
		return data;
	},
	async getUserActivity (userId){
		const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
		const data = await response.json();
		return data;
	},
	async getUserAverageSession (userId){
		const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
		const data = await response.json();
		return data;
	},
	async getUserPerformance (userId){
		const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
		const data = await response.json();
		return data;
	}
}