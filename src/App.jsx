import { useEffect, useState } from 'react'

import { adaptPerformance, adaptUserData } from './utils/adaptData'

import { Api } from './api/api'
import { BarCharts } from './components/barChart';
import { Card } from './components/Card';
import { LineCharts } from './components/LineChart';
import { RadarCharts } from './components/RadarChart';

const getUser = async ()  => {
	const data = await Api.getUserData(12);
	return adaptUserData(data);
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
const [userAverageSession, setUserAverageSession] = useState(null);
const [userPerformance, setUserPerformance] = useState(null);

useEffect(() => {
	const fetchData = async () => {
		const userData = await getUser();
		setUserData(userData);
		const userActivity = await getUserActivity();
		setUserActivity(userActivity);
		const userAverageSession = await getUserAverageSession();
		setUserAverageSession(userAverageSession);
		const userPerformance = await getUserPerformance();
		setUserPerformance(userPerformance);
		console.log("USER DATA ",userData);
		console.log("USER ACTIVITY ",userActivity);
		console.log("USER SESSion ",userAverageSession);
		console.log("USER PERFORMANCE ",userPerformance);
	}
	fetchData();
},[])

return (
	<>
	{userData && userActivity && userAverageSession && userPerformance ? (
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
		<div style={{display: "flex", justifyContent: "space-between", marginTop: "50px", marginBottom: "50px",width: "100%", gap: "20px"}}>
			<div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "40px"}}>
				<div style={{ width: "100%", height: "300px", backgroundColor: "#FBFBFB", borderRadius: "5px", padding: "20px 0 20px 20px", display: "flex", alignItems: "end", justifyItems: "center"}}>
					<BarCharts data={userActivity}/>
				</div>
				<div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
					<div style={{ height: "300px", borderRadius: "5px", padding: "20px", display: "flex", alignItems: "center", justifyItems: "center", backgroundColor: "#FF0000"}}>
						<LineCharts data={userAverageSession}/>
					</div>
					<div style={{ height: "300px", borderRadius: "5px",backgroundColor: "black", padding: "0px", display: "flex", alignItems: "center", justifyItems: "center"}}>
						<RadarCharts data={userPerformance}/>
					</div>
					<div style={{ height: "300px", backgroundColor: "red", borderRadius: "5px", padding: "20px 0 20px 20px", display: "flex", alignItems: "center", justifyItems: "center"}}>
					</div>
				</div>
			</div>
			<div style={{ width: "20%", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "20px"}}>
				{userData.keyData &&  userData.keyData.map((data, index) => (
					<Card key={index} data={data}/>
				))}
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
