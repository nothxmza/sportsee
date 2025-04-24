import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const BarCharts = ({data}) => {

console.log("data", data.data.sessions);

    return (
		<div style={{ width: "100%", height: "380px"}}>
			<ResponsiveContainer width="100%" height="100%">
					<BarChart
					data={data.data.sessions}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
					>
					<YAxis  orientation="right" stroke="#9B9EAC"  tickLine={false} axisLine={false}/>
					<XAxis dataKey="day" stroke="#9B9EAC"  tickLine={false} />
					<Tooltip />
					<Legend align="right" verticalAlign="top" iconType="circle" iconSize={10} wrapperStyle={{top: -10, right: 50}} />
					<Bar dataKey="kilogram" fill="#282D30" radius={6} barSize={15}/>
					<Bar dataKey="calories" fill="#E60000"  radius={6} barSize={15}/>
					</BarChart>
			</ResponsiveContainer>
		</div>
    );
}
