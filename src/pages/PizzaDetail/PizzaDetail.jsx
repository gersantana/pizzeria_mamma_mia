import { useNavigate, useParams } from "react-router-dom";
import "./PizzaDetail.css";
import { useContext, useEffect, useState } from "react";
import { PizzaPageContext } from "../../context/MyContext";
const PizzaDetail = () => {
	const { pizzas } = useContext(PizzaPageContext);
	const [probandoLaWeaa, setProbandoLaWeaa] = useState ({})
	const { id } = useParams();
	// const [pizzaDetalle, setPizzaDetalle] = useState({})
	const navigate = useNavigate();
	console.log(pizzas);

	const pizzaDetalle = ()=> {
		const mantenerData = pizzas.filter((pizza) => pizza.id == id);
		setProbandoLaWeaa(mantenerData)
		return mantenerData
	}
	console.log(pizzaDetalle);
	const regresar = () => {
		navigate(-1);
	};

	// useEffect(() => {
	//   const filtroPizza = pizzas.find((pizza) => pizza.id === id);
	//   setPizzaDetalle(filtroPizza);
	// }, []);

	useEffect(()=>{
		pizzaDetalle()
	},[pizzas])

	return (
		<>
			<h2 className=" text-4xl text-center font-medium mt-24">Detalle</h2>
			<div className="container mx-auto min-h-fit mt-12 py-3 flex flex-wrap justify-center">
				<img src={pizzaDetalle[0]?.img} className="border border-slate-400 w-96" alt={`pizza ${id}`} />
				<div className="flex flex-col px-3 py-3 justify-between w-96 gap-3 border rounded-tr-lg rounded-br-lg border-slate-400">
					<h1 className="text-2xl font-medium">{probandoLaWeaa[0]?.name.toUpperCase()}</h1>
					<p>{pizzaDetalle[0]?.desc}</p>
					<ul className="">
          <h3 className="text-xl font-bold">Ingredientes:</h3>
						<li className="">{pizzaDetalle[0]?.ingredients[0]}</li>
						<li className="">{pizzaDetalle[0]?.ingredients[1]}</li>
						<li className="">{pizzaDetalle[0]?.ingredients[2]}</li>
						<li className="">{pizzaDetalle[0]?.ingredients[3]}</li>
					</ul>
					<div className="flex justify-between">
						<p className="font-bold text-2xl"> Precio: {`$${pizzaDetalle[0]?.price}`}</p>
						<button>Carrito</button>
					</div>
				</div>
			</div>
			<div className="flex">
				<button className=" mt-2 mx-auto" onClick={regresar}>
					Regresar
				</button>
			</div>

      {/* //Alert al no poder cargar detalle */}
      {pizzaDetalle.length === 0? <p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-5 rounded-xl">Hemos Presentado inconvenientes al cargar el DETALLE</p> : null}

		</>
	);
};

export default PizzaDetail;
