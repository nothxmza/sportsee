import { useEffect, useState } from 'react'

import { adaptPerformance } from './utils/adaptData'

import { Api } from './api/api'
import { BarCharts } from './components/barChart';

const getUser = async ()  => {
	const data = await Api.getUserData(12);
	return data.data;
}
const getUserActivity = async ()  => {
	const data = await Api.getUserActivity(12);
	return data;
}
const getUserAverageSession = async ()  => {
	const data = await Api.getUserAverageSession(12);
	return data;
}
const getUserPerformance = async ()  => {
	const data = await Api.getUserPerformance(12);
	return adaptPerformance(data);
}

function App() {
const [userData, setUserData] = useState(null);
const [userActivity, setUserActivity] = useState(null);

useEffect(() => {
	const fetchData = async () => {
		const userData = await getUser();
		setUserData(userData);
		const userActivity = await getUserActivity();
		setUserActivity(userActivity);
		const userAverageSession = await getUserAverageSession();
		const userPerformance = await getUserPerformance();
		console.log("USER DATA ",userData);
		console.log("USER ACTIVITY ",userActivity);
		console.log("USER SESSion ",userAverageSession);
		console.log("USER PERFORMANCE ",userPerformance);
	}
	fetchData();
},[])

return (
	<>
	{userData && userActivity ? (
		<>
		<div>
			<h1 style={{margin: 0, padding: 0, fontSize: "48px", fontWeight: "500"}}>
				{userData? (
					<div>
					Bonjour <span style={{color: "#E60000"}}>{userData.userInfos.firstName}</span>
					</div>
				) : (
					<div>Loading...</div>
				)}
			</h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
		<div style={{display: "flex", justifyContent: "space-between", marginTop: "50px", width: "100%", gap: "20px"}}>
			<div style={{ width: "70%"}}>
				<div style={{ width: "100%", height: "480px", backgroundColor: "#FBFBFB", borderRadius: "5px", padding: "20px 0 20px 20px", display: "flex", alignItems: "center", justifyItems: "center"}}>
					<BarCharts data={userActivity}/>
				</div>
				<div style={{ width: "100%", height: "500px", backgroundColor: "#FFFFFF"}}>
					<BarCharts data={userActivity}/>
				</div>
			</div>
			<div style={{ width: "30%", backgroundColor: "#FF0000", borderRadius: "5px", padding: "20px"}}>
			</div>
		</div>
		</>
	):(
		<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
			<h1>Loading...</h1>
		</div>
	)}
	</>
)}

export default App
