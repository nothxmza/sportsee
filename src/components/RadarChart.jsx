import React from 'react';
import { RadarChart, Radar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PolarAngleAxis, PolarGrid, PolarRadiusAxis } from 'recharts';


export const RadarCharts = ({data}) => {
	return(
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart  data={data.data} >
				<PolarGrid stroke="#FFFFFF"/>
				<PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tick={{className: "radar-text", fontSize: 10}}/>
				<Radar name="stat" dataKey="value" fill="#FF0101B2" stroke="#FF0101B2" />
				<Tooltip />
			</RadarChart>
		</ResponsiveContainer>
	)
}