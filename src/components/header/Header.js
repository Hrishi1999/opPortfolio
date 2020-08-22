import React , { Component }from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import {greeting, settings} from '../../portfolio.js';

const onMouseEnter = (event, color) => {
	const el = event.target;
	el.style.backgroundColor = color;
}

const onMouseOut = (event) => {
	const el = event.target;
	el.style.backgroundColor = "transparent";
}

class Header extends Component {

	render(){
	const theme = this.props.theme;
	console.log(theme);
	const link = settings.isSplash ? '/splash' : 'home';
  return (
		<Fade top duration={1000} distance="20px">
			<div>
				<header className="header">
					<NavLink to={link} tag={Link} className="logo">
						<span style={{ color: theme.text }}></span>
						<span className="logo-name" style={{ color: theme.text }}>
							{greeting.logo_name}
						</span>
						<span style={{ color: theme.text }}></span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span
							className="navicon"
							
						></span>
					</label>
					<ul className="menu" style={{ backgroundColor: theme.body }}>
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
								style={{ color: theme.text, borderRadius: 5  }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
								style={{ color: theme.text, borderRadius: 5 }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight1)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Education and Certifications
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
								style={{ color: theme.text, borderRadius: 5  }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight2)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Experience
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
								style={{ color: theme.text, borderRadius: 5  }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight3)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
								style={{ color: theme.text, borderRadius: 5  }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight4)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Contact and Resume
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
		</Fade>
	);
  }
}
export default Header;
