import React from 'react';
import { RadarChart, Radar, Tooltip, ResponsiveContainer, PolarAngleAxis, PolarGrid } from 'recharts';


export const RadarCharts = ({data}) => {
	return(
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart  data={data.data} >
				<PolarGrid stroke="#FFFFFF"/>
				<PolarAngleAxis dataKey="kind"  tick={{fontSize: 10, fill : "white"}}/>
				<Radar name="stat" dataKey="value" fill="#FF0101B2" stroke="#FF0101B2" />
				<Tooltip />
			</RadarChart>
		</ResponsiveContainer>
	)
}