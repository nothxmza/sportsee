import logo from './assets/logo.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

export const Layout = ({children}) => {
	return (
		<>
			<div style={{backgroundColor: 'black', padding: '10px', width:"100%", height:"80px", display: "flex", alignItems: "center", color: "white"}}>
				<img src={logo} className="logo" alt="Vite logo" />
				<ul style={{listStyle: "none", display: "flex", justifyContent: "space-around", width: "100%", padding: "0", margin: "0"}}>
					<li>Accueil</li>
					<li>Profil</li>
					<li>Réglage</li>
					<li>Communauté</li>
				</ul>
			</div>
			<div style={{display: "flex"}}>
				<div style={{backgroundColor: 'black', padding: '10px', display: 'flex', alignItems: 'center', 
					flexDirection: 'column', width: "80px", justifyContent: "space-around", color: "white"
				}}>
					<div style={{gap: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
						<img src={icon1} className="logo" alt="Vite logo" />
						<img src={icon2} className="logo" alt="Vite logo" />
						<img src={icon3} className="logo" alt="Vite logo" />
						<img src={icon4} className="logo" alt="Vite logo" />
					</div>
					<p style={{color: "white", rotate: "-90deg", width: "100px", fontSize: 12, fontWeight: 500 }}>testmle truc</p>
				</div>
				<div style={{margin: "50px 50px 0 50px", width: "100%"}}>
					{children}
				</div>
			</div>
		</>
	)
}