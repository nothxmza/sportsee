import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import "../App.css"

const CustomTooltip = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div style={{ backgroundColor: "#E60000", padding: "10px", borderRadius: "5px", fontSize: "12px", color: "white" }}>
				<p>{`${payload[0].value} kg`}</p>
				<p>{`${payload[1].value} kCal`}</p>
			</div>
		);
	}
}


export const BarCharts = (data) => {

	data = data.data || data;
	return (
		<div style={{ width: "100%", height: "200px", position: "relative"}}>
			<h2 style={{ margin: 0, fontSize: 15, top: -50, position: "absolute", color: "#20253A", fontWeight: 500 }}>Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data.data ? data.data.sessions : data.sessions}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
					barSize={7}
					barGap={8}
				>
					<CartesianGrid strokeDasharray="3" vertical={false} />
					<YAxis  dataKey="calories" orientation="right" stroke="#9B9EAC"  tickLine={false} axisLine={false} tickMargin={20}/>
					<XAxis dataKey="day" stroke="#9B9EAC"  tickLine={false} tickFormatter={(day,i) => i + 1}  />
					<Tooltip content={<CustomTooltip />} />
					<Legend align="right" verticalAlign="top" iconType="circle" iconSize={10} wrapperStyle={{ top: -50, right: 50}} />
					<Bar dataKey="kilogram" fill="#282D30" radius={6} name="Poids (kg)"/>
					<Bar dataKey="calories" fill="#E60000"  radius={6} name="Calories brûlées (kCal)"/>
				</BarChart>
			</ResponsiveContainer>
		</div>
    );
}
