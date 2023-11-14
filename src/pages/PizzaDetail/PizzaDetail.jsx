import { useNavigate, useParams } from "react-router-dom";
import "./PizzaDetail.css";
import { useContext, useEffect, useState } from "react";
import { PizzaPageContext } from "../../context/MyContext";
const PizzaDetail = () => {
	const { pizzas } = useContext(PizzaPageContext);
	const { id } = useParams();
	// const [pizzaDetalle, setPizzaDetalle] = useState({})
	const navigate = useNavigate();
	console.log(pizzas);
	const pizzaDetalle = pizzas.filter((pizza) => pizza.id == id);
	console.log(pizzaDetalle);
	const regresar = () => {
		navigate(-1);
	};

	// useEffect(() => {
	//   const filtroPizza = pizzas.find((pizza) => pizza.id === id);
	//   setPizzaDetalle(filtroPizza);
	// }, []);

	return (
		<div className="min-h-full">
			<h2 className=" text-4xl text-center font-medium">Detalle</h2>
			<div className="container mx-auto min-h-fit mt-12 py-3 flex flex-wrap justify-center">
				<img src={pizzaDetalle[0].img} className=" w-96" alt={`pizza ${id}`} />
				<div className="flex flex-col px-3 py-3 justify-between w-96 gap-3 border">
					<h1 className="text-2xl font-medium">{pizzaDetalle[0].name.toUpperCase()}</h1>
					<p>{pizzaDetalle[0].desc}</p>
					<ul className="">
          <h3 className="text-xl font-bold">Ingredientes:</h3>
						<li className="">{pizzaDetalle[0].ingredients[0]}</li>
						<li className="">{pizzaDetalle[0].ingredients[1]}</li>
						<li className="">{pizzaDetalle[0].ingredients[2]}</li>
						<li className="">{pizzaDetalle[0].ingredients[3]}</li>
					</ul>
					<div className="flex justify-between">
						<p> <span className="font-bold">Precio:</span> {`$${pizzaDetalle[0].price}`}</p>
						<button>Carrito</button>
					</div>
				</div>
			</div>
			<div className="flex">
				<button className=" mt-2 mx-auto" onClick={regresar}>
					Regresar
				</button>
			</div>
		</div>
	);
};

export default PizzaDetail;
