import { useContext } from "react";
import "./MenuPizzas.css";
import { PizzaPageContext } from "../../context/MyContext";
import { Link, useParams } from "react-router-dom";

const MenuPizzas = () => {

	const { pizzas, loading, agregarAlCarrito } = useContext(PizzaPageContext);
    const {id} = useParams()
	if(loading) {
        return <div className="text-center mt-48 text-4xl font-medium">Cargando...</div>;
    }

	const handleAgregarAlCarrito = (pizza) => {
		agregarAlCarrito(pizza)
	}
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
						<ul className="ml-4 list-disc">
							{pizza.ingredients?.map((ingrediente, i) => (
								<li key={i}>{ingrediente}</li>
							))}
						</ul>
                        <p className="text-center text-2xl font-bold border-t-2 m-3">{`$ ${pizza.price}`}</p>
						<div className="flex justify-around card-body">
							<Link to={`pizza/${pizza.id}`} className=" bg-ros border border-neutral-500 px-4 py-2 rounded-xl">
								Ver mas...
							</Link>
							<button onClick={() => handleAgregarAlCarrito(pizza)} className="px-4 py-2 bg-green-400 rounded-xl">Agregar al carrito</button>
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
