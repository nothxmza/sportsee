import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';


const CustomTooltip = ({ active, payload }) => {
	if(active && payload){
		return (
			<div style={{ backgroundColor: "#FFFFFF", padding: "10px", borderRadius: "5px", fontSize: "12px", color: "#000" }}>
				<p>{`${payload[0].value} min`}</p>
			</div>
		)
	}
}

const CustomCursor = ({points, width}) => {
	const { x, y } = points[0];
	return (
		<Rectangle
			fill="#0000001A"
			x={x}
			y={y}
			width={width + 20}
			height={300}
		/>
	)
}

export const LineCharts = ({data}) => {
	const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
	return(
		<div style={{ width: "100%", height: "100%", backgroundColor: "#FF0000", padding: "0px", position: "relative", borderRadius: "5px"}}>
			<h2 style={{position: "absolute", color: "#FFFFFF99", fontSize: "15px", fontWeight: "bold", top: 20, left: 20}}>Durée moyenne des <br/> sessions</h2>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data.data.sessions}
					margin={{ top: 0, right: 20, left: 20, bottom: 30 }}
				>
					<XAxis dataKey="day"  tickLine={false} axisLine={false} interval="preserveStartEnd" tickFormatter={(day,i) => daysOfWeek[i]}
						tickMargin={20} tick={{fontSize: 12, fill: "#FFFFFF83"}}/>
					<Tooltip content={<CustomTooltip/>} cursor={<CustomCursor />}/>
					<YAxis hide={true} domain={[0, "dataMax + 40"]} tickLine={false} axisLine={false} />
					<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false}  activeDot={{stroke: "#FFFFFF99", strokeWidth: 10, r: 5}}/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
