import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<div>
				<Link to={"/"}>logo</Link>
			</div>
			<ul>
				<li>
					<NavLink to={"/"}>Inicio</NavLink>
				</li>
				<li>
                    <NavLink to={"/carrito"}>Carrito</NavLink>
                </li>
			</ul>
		</nav>
	);
};

export default NavBar;
