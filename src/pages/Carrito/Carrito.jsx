import { useContext } from "react";
import "./Carrito.css";
import { PizzaPageContext } from "../../context/MyContext";
const Carrito = () => {
	const { carrito, regresar, setCarrito } = useContext(PizzaPageContext);

	const incrementarCantidad = (pizzaAgregada) => {
		const nuevoCarrito = carrito.map((p) => (p.id === pizzaAgregada.id ? { ...p, cantidad: p.cantidad + 1 } : p));
		setCarrito(nuevoCarrito);
	};

	const decrementarCantidad = (pizzaAgregada) => {
		const nuevoCarrito = carrito.map((p) => (p.id === pizzaAgregada.id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p));
		setCarrito(nuevoCarrito);
	};

  const calcularPrecioTotal = (pizza) => {
    return pizza.price * pizza.cantidad;
};


	return (
		<div>
			<h1 className="text-center mt-24 mb-8 font-medium text-4xl">Carrito</h1>
			{carrito.length === 0 ? (
				<p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-32 rounded-xl">Ups!! al parecer aun no tienes nada en el carrito</p>
			) : (
				<div className="flex flex-col gap-3 justify-center items-center w-2/5  m-auto flex-wrap ">
					{carrito.map((pizzaAgregada) => (
						<div key={pizzaAgregada.id} className="w-82 flex gap-3 justify-between items-center container m-auto flex-wrap mb-5">
							<div className="flex items-center gap-3">
								<img className="w-36" src={pizzaAgregada.img} alt="" />
								<h3>{pizzaAgregada.name.toUpperCase()}</h3>
							</div>
							<div className=" flex font-medium gap-3 items-center ">
								<p>{`$ ${calcularPrecioTotal(pizzaAgregada)}`}</p>
								<div className="flex gap-4">
									<button onClick={() => decrementarCantidad(pizzaAgregada)}>-</button>
									<p className=" border p-1 px-3"> {pizzaAgregada.cantidad}</p>
									<button onClick={() => incrementarCantidad(pizzaAgregada)}>+</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			<div className="flex">
				<button className="flex items-center gap-1 mt-10 mx-auto border border-neutral-500 px-4 py-2 rounded-xl" onClick={regresar}>
					<span className="text-1xl font-bold">&larr;</span> Regresar
				</button>
			</div>
		</div>
	);
};

export default Carrito;
