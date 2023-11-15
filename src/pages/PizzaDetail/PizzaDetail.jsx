import { useNavigate, useParams } from "react-router-dom";
import "./PizzaDetail.css";
import { useContext, useEffect, useState } from "react";
import { PizzaPageContext } from "../../context/MyContext";
const PizzaDetail = () => {
	const { id } = useParams();
	const { pizzas, loading } = useContext(PizzaPageContext);
	// const [pizzaDetalle, setPizzaDetalle] = useState({})
	const pizzaDetalle = pizzas.filter((pizza) => pizza.id == id);
	const navigate = useNavigate();

	//Funcion regresar pag anterior
	const regresar = () => {
		navigate(-1);
	};

	if(loading) {
        return <div className="text-center mt-48 text-4xl font-medium">Cargando...</div>;
    }
	// useEffect(() => {
	//   const filtroPizza = pizzas.find((pizza) => pizza.id === id);
	//   setPizzaDetalle(filtroPizza);
	// }, []);

	return (
		<>
			<h2 className=" text-4xl text-center font-medium mt-24">Detalle</h2>
			{/* //Alert al no poder cargar detalle de lo contrario muestra contenido   */}
			{pizzaDetalle.length === 0 ? (
				<p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-60 rounded-xl">Hemos Presentado inconvenientes al cargar el DETALLE</p>
			) : (
				<div>
					<div className="container mx-auto min-h-fit mt-12 py-3 flex flex-wrap justify-center">
						<img src={pizzaDetalle[0]?.img} className="border border-slate-400 w-96" alt={`pizza ${id}`} />
						<div className="flex flex-col px-3 py-3 justify-between w-96 gap-3 border rounded-tr-lg rounded-br-lg border-slate-400">
							<h1 className="text-2xl font-medium">{pizzaDetalle[0]?.name.toUpperCase()}</h1>
							<p>{pizzaDetalle[0]?.desc}</p>
							<h3 className="text-xl font-bold">Ingredientes:</h3>
							<ul className="ml-4 list-disc">
								{pizzaDetalle[0].ingredients?.map((ingrediente, i) => (
									<li key={i}>{ingrediente}</li>   
								))}
							</ul>
							<div className="flex justify-between items-center">
								<p className="font-bold text-2xl"> Precio: {`$${pizzaDetalle[0]?.price}`}</p>
								<button className="px-4 py-2 bg-green-400 rounded-xl">Agregar al carrito</button>
							</div>
						</div>
					</div>
					<div className="flex">
						<button className="flex items-center gap-1 mt-2 mx-auto border border-neutral-500 px-4 py-2 rounded-xl" onClick={regresar}>
						<span className="text-1xl font-bold">&larr;</span> Regresar
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default PizzaDetail;
