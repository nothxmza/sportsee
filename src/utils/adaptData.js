export const adaptPerformance = (data) => {
	data = data.data || data;

	const kindTranslations = {
		cardio: "Cardio",
		energy: "Énergie",
		endurance: "Endurance",
		strength: "Force",
		speed: "Vitesse",
		intensity: "Intensité",
	}

	const adaptedData = {
		userId: data.userId,
		data: data.data?  data.data.map((i) => ({
			value: i.value,
			kind: kindTranslations[data.kind[i.kind]],
		})) : data.map((i) => ({
			value: i.value,
			kind: kindTranslations[i.kind],
		})),
	}
	return adaptedData;
}

export const adaptUserData = (data) => {
	data = data.data || data;

	const adaptedData = {
		id: data.id,
		score: data.todayScore || data.score,
		userInfos: {
			firstName: data.userInfos.firstName,
			lastName: data.userInfos.lastName,
			age: data.userInfos.age,
		},
		keyData: [{
			value: data.keyData.calorieCount,
			type:"Calories",
			unit: "kCal"
		},
		{
			value: data.keyData.proteinCount,
			type:"Proteines",
			unit: "g"
		},
		{
			value: data.keyData.carbohydrateCount,
			type:"Glucides",
			unit: "g"
		},
		{
			value: data.keyData.lipidCount,
			type:"Lipides",
			unit: "g"
		}]
	}
	return adaptedData;
}