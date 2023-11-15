import { useContext } from "react";
import "./MenuPizzas.css";
import { PizzaPageContext } from "../../context/MyContext";
import { Link, useParams } from "react-router-dom";

const MenuPizzas = () => {

	const { pizzas } = useContext(PizzaPageContext);
    const {id} = useParams()

	return (
		<>
			<h2 className="text-center my-8 text-5xl font-bold">Elige tus Pizzas</h2>
			<div className=" container mx-auto gap-5 grid-pizzas">
				{pizzas.map((pizza) => (
					<div key={pizza.id} className="border border-gray-300" style={{ width: "19rem" }}>
						<img src={pizza.img} alt={`pizza ${id}`} />
                        <div className="p-3">
                        <div>
							<h1 className=" text-2xl font-bold border-b-2">{pizza.name.toUpperCase()}</h1>
						</div>
                        <h3 className="text-lg font-medium mt-3">Ingredientes:</h3>
						<ul className="ml-4">
							<li className="list-group-item">{pizza.ingredients[0]}</li>
							<li className="list-group-item">{pizza.ingredients[1]}</li>
							<li className="list-group-item">{pizza.ingredients[2]}</li>
							<li className="list-group-item">{pizza.ingredients[3]}</li>
						</ul>
                        <p className="text-center text-2xl font-bold border-t-2 m-3">{`$ ${pizza.price}`}</p>
						<div className="flex justify-around card-body">
							<Link to={`/pizza/${pizza.id}`} className="card-link">
								Ver mas
							</Link>
							<button>Añadir</button>
						</div>
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
