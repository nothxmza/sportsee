import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const ProgressCircle = ({data}) => {
	const formatData = [
		{
			name: "score",
			value: data.score * 100,
		},
		{
			name: "rest",
			value: 100 - data.score * 100,
		}
	]

	const COLORS = ["#FF0000", "#f5f5f5"];

	return (
	<div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#FBFBFB", borderRadius: "5px", padding: "20px"}}>
		<p style={{position: "absolute", top: 30, left: 30, margin: 0, fontSize: 15}}>Score</p>
		<div style={{ position: "absolute", textAlign: "center"}}>
			<p style={{ fontSize: "20px", fontWeight: "bold", margin: 0, color: "#20253A"}}>
				{data.score * 100}%
			</p>
			<p style={{ fontSize: "15px", color: "#74798C", margin: 0}}>
				de votre<br />objectif
			</p>
		</div>
		<ResponsiveContainer width="100%" height="100%">
			<PieChart >
				<Pie data={formatData} innerRadius={75} outerRadius={90} startAngle={-270} endAngle={270} dataKey="value" stroke="none">
					{formatData.map((item, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index]} cornerRadius={index === 0 ? "50%" : 0}/>
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	</div>
  );
};