import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { adaptPerformance, adaptUserData } from '../utils/adaptData'

import { Api } from '../api/api'
import { BarCharts } from '../components/barChart';
import { Card } from '../components/Card';
import { LineCharts } from '../components/LineChart';
import { RadarCharts } from '../components/RadarChart';
import { ProgressCircle } from '../components/ProgressCircle';
import { useParams } from 'react-router';


const WrapperChart = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
`;


function App() {
const [userData, setUserData] = useState(null);
const [userActivity, setUserActivity] = useState(null);
const [userAverageSession, setUserAverageSession] = useState(null);
const [userPerformance, setUserPerformance] = useState(null);
const [error, setError] = useState(false);

const id = useParams().id || 12;

useEffect(() => {
	const fetchData = async () => {
		try{
			const userData = await Api.getUserData(id);
			setUserData(adaptUserData(userData));
			const userActivity = await Api.getUserActivity(id);
			setUserActivity(userActivity);
			const userAverageSession = await Api.getUserAverageSession(id);
			setUserAverageSession(userAverageSession);
			const userPerformance = await Api.getUserPerformance(id);
			setUserPerformance(adaptPerformance(userPerformance));
		} catch (e) {
			setError(true);
		}
	}
	fetchData();
},[id])


if (error) {
	return (
		<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
			<h1>Erreur lors du chargement des données utilisateur</h1>
		</div>
	);
}

return (
	<>
	{userData && userActivity && userAverageSession && userPerformance ? (
		<>
		<div>
			<h1 style={{margin: 0, padding: 0, fontSize: "48px", fontWeight: "500"}}>
				<div>
				Bonjour <span style={{color: "#E60000"}}>{userData.userInfos.firstName}</span>
				</div>
			</h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
		<div style={{display: "flex", justifyContent: "space-between", marginTop: "50px", marginBottom: "50px",width: "100%", gap: "20px"}}>
			<div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "40px"}}>
				<div style={{ width: "100%", height: "300px", backgroundColor: "#FBFBFB", borderRadius: "5px", padding: "20px 0 20px 20px", display: "flex", alignItems: "end", justifyItems: "center"}}>
					<BarCharts data={userActivity}/>
				</div>
				<WrapperChart>
					<div style={{ height: "300px"}}>
						<LineCharts data={userAverageSession}/>
					</div>
					<div style={{ height: "300px", borderRadius: "5px",backgroundColor: "#282D30", padding: "0px", display: "flex", alignItems: "center", justifyItems: "center"}}>
						<RadarCharts data={userPerformance}/>
					</div>
					<div style={{ height: "300px", borderRadius: "5px", display: "flex", alignItems: "center", justifyItems: "center", backgroundColor: "#FBFBFB"}}>
						<ProgressCircle data={userData}/>
					</div>
				</WrapperChart>
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
