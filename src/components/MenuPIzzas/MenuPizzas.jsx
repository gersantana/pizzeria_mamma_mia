import { useContext } from "react";
import "./MenuPizzas.css";
import { PizzaPageContext } from "../../context/MyContext";
import { Link } from "react-router-dom";

const MenuPizzas = () => {

	const { pizzas } = useContext(PizzaPageContext);

	return (
		<>
			<h2 className="text-center my-8 text-5xl font-bold">Elige tus Pizzas</h2>
			<div className=" container mx-auto gap-5 grid-pizzas ">
				{pizzas.map((pizza) => (
					<div key={pizza.id} className="card" style={{ width: "19rem" }}>
						<img src={pizza.img} className="card-img-top" alt="..." />
						<div className="card-body">
							<h1 className="card-title">{pizza.name.toUpperCase()}</h1>
						</div>
						<ul className="list-group list-group-flush">
							<h3>Ingredientes:</h3>
							<li className="list-group-item">{pizza.ingredients[0]}</li>
							<li className="list-group-item">{pizza.ingredients[1]}</li>
							<li className="list-group-item">{pizza.ingredients[2]}</li>
							<li className="list-group-item">{pizza.ingredients[3]}</li>
						</ul>
                        <p>{`$ ${pizza.price}`}</p>
						<div className="card-body">
							<Link to={`/pizza/${pizza.id}`} className="card-link">
								Ver mas
							</Link>
							<button>Añadir</button>
						</div>
					</div>
				))}
				;
			</div>
		</>
	);
};

export default MenuPizzas;
// container-xl d-flex flex-wrap gap-5 justify-content-center
