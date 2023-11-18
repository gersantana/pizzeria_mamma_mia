import { useContext } from "react";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";
import { PizzaPageContext } from "../../context/MyContext";

const NavBar = () => {
	const {totalPizzas} = useContext(PizzaPageContext)
	return (
		<nav className="flex flex-row gap-5 justify-around items-center bg-orange-400 bg-opacity-80 backdrop-blur-md flex-wrap px-5 nav_container fixed top-0 w-full z-10 ">
			<div>
				<Link to={"pizzeria_mamma_mia/"}><img className="w-12" src="../img2.png" alt="Logo"></img></Link>
			</div>
			<ul className="flex gap-5 font-medium">
				<li>
					<NavLink to={"pizzeria_mamma_mia/"}>Inicio</NavLink>
				</li>
				<li>
                    <NavLink to={"pizzeria_mamma_mia/carrito"}>{`Carrito (${totalPizzas})`}</NavLink>
                </li>
			</ul>
		</nav>
	);
};

export default NavBar;
