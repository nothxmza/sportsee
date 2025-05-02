import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload }) => {
	if(active && payload){
		return (
			<div style={{ backgroundColor: "#FFFFFF", padding: "10px", borderRadius: "5px", fontSize: "12px", color: "#000" }}>
				<p>{`${payload[0].value} min`}</p>
			</div>
		)
	}
}

export const LineCharts = ({data}) => {
	return(
		<div style={{ width: "100%", height: "200px"}}>
			<h2 style={{margin: 0, fontSize: 15}}>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data.data.sessions}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<XAxis dataKey="day" stroke="#FFFFFF" tickLine={false} axisLine={false} interval="preserveStartEnd"/>
					<Tooltip content={<CustomTooltip/>}/>
					<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
