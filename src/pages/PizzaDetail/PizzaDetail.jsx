import { useParams } from "react-router-dom";
import "./PizzaDetail.css";
import { useContext } from "react";
import { PizzaPageContext } from "../../context/MyContext";
const PizzaDetail = () => {
	const { id } = useParams();
	const { pizzas, loading, agregarAlCarrito, regresar } = useContext(PizzaPageContext);
	const pizza = pizzas.find((pizzaFiltrada) => pizzaFiltrada.id == id);
	

	if(loading) {
        return <div className="text-center mt-48 text-4xl font-medium">Cargando...</div>;
    }

	const handleAgregarAlCarrito = () => {
		agregarAlCarrito(pizza)
	}

	return (
		<>
			<h2 className=" text-4xl text-center font-medium mt-24">Detalle</h2>
			{/* //Alert al no poder cargar detalle de lo contrario muestra contenido   */}
			{!pizza? (
				<p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-32 rounded-xl">Hemos Presentado inconvenientes al cargar el DETALLE</p>
			) : (
				<div>
					<div className="container mx-auto min-h-fit mt-12 py-3 flex flex-wrap justify-center">
						<img src={pizza?.img} className="border border-slate-400 w-96" alt={`pizza ${id}`} />
						<div className="flex flex-col px-3 py-3 justify-between w-96 gap-3 border rounded-tr-lg rounded-br-lg border-slate-400">
							<h1 className="text-2xl font-medium">{pizza?.name.toUpperCase()}</h1>
							<p>{pizza?.desc}</p>
							<h3 className="text-xl font-bold">Ingredientes:</h3>
							<ul className="ml-4 list-disc">
								{pizza.ingredients?.map((ingrediente, i) => (
									<li key={i}>{ingrediente}</li>   
								))}
							</ul>
							<div className="flex justify-between items-center">
								<p className="font-bold text-2xl"> Precio: {`$${pizza?.price}`}</p>
								<button onClick={handleAgregarAlCarrito}  className="px-4 py-2 bg-green-400 rounded-xl">Agregar al carrito</button>
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
