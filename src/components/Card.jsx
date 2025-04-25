import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import cheesburger from "../assets/cheeseburger.svg";
import apple from "../assets/apple.svg";


export const Card = ({ data }) => {

	let color = "#ff000020";
	if(data.type === "Calories"){
		color = "#ff000020";
	}else if(data.type === "Proteines"){
		color = "#4AB8FF1A";
	}else if(data.type === "Glucides"){
		color = "#f9ce2316";
	}
	else if(data.type === "Lipides"){
		color = "#FD51811A";
	}

	let icon = "energy";
	if(data.type === "Calories"){
		icon = energy;
	}else if(data.type === "Proteines"){
		icon = chicken;
	}else if(data.type === "Glucides"){
		icon = apple;
	}else if(data.type === "Lipides"){
		icon = cheesburger;
	}

	return(
		<div style={{ width: "100%",backgroundColor: "#FBFBFB", borderRadius: "5px", padding: "20px", display: "flex", alignItems: "center", justifyItems: "center"}}>
			<div style={{display: "flex", gap: "20px", alignItems: "center"}}>
				<div style={{padding: "20px", backgroundColor: color, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"}}>
					<img src={icon} alt="energy" />
				</div>
				<div>
					<h2 style={{fontSize: "20px", fontWeight: "500", margin: 0, padding: 0}}> <strong>{data.value}{data.unit}</strong></h2>
					<p style={{fontSize: "16px", fontWeight: "300", margin: 0, padding: 0}}>{data.type}</p>
				</div>
			</div>
		</div>
	)
}