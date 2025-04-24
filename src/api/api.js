export const Api = {
	async getUserData (userId){
		try{
			const response = await fetch(`http://localhost:3000/user/${userId}`);
			const data = await response.json();
			return data;
		}catch(e){
			console.error('Error fetching user data:', e);
		}
	},
	async getUserActivity (userId){
		try{
			const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
			const data = await response.json();
			return data;
		}catch(e){
			console.error('Error fetching user activity:', e);
		}
	},
	async getUserAverageSession (userId){
		try{
			const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
			const data = await response.json();
			return data;
		}catch(e){
			console.error('Error fetching user average session:', e);
		}
	},
	async getUserPerformance (userId){
		try{
			const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
			const data = await response.json();
			return data;
		}catch(e){
			console.error('Error fetching user performance:', e);
		}
	}
}