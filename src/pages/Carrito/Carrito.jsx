import { useContext } from "react";
import "./Carrito.css";
import { PizzaPageContext } from "../../context/MyContext";
const Carrito = () => {
	const { carrito, regresar, setCarrito, totalPagar } = useContext(PizzaPageContext);

	//función de incrementar con el botón +
	const incrementarCantidad = (pizzaAgregada) => {
		const carritoActualizado = carrito.map((p) => (p.id === pizzaAgregada.id ? { ...p, cantidad: p.cantidad + 1 } : p));
		setCarrito(carritoActualizado);
	};

	//función de decremento con el botón -
	const decrementarCantidad = (pizzaAgregada) => {
		if (pizzaAgregada.cantidad === 1) {
			// Verificar si se desea eliminar la única pizza del carrito
			const confirmacion = window.confirm("¿Estás seguro que deseas eliminar este artículo del carrito?");
			// Borra la pizza del carrito
				carrito.shift(pizzaAgregada);
        
			if (!confirmacion) {
				return; // No hacer nada si el usuario elige "Cancelar"
			}
		}
		const carritoActualizado = carrito.map((p) => (p.id === pizzaAgregada.id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p));
		setCarrito(carritoActualizado);
	};

	const calcularPrecioTotal = (pizzaAgregada) => {
		const precioGrupal =  pizzaAgregada.price * pizzaAgregada.cantidad;
    return precioGrupal.toLocaleString('cd')
	};

	return (
		<div>
			<h1 className="text-center mt-24 mb-8 font-medium text-4xl">Carrito</h1>
			{carrito.length === 0 ? (
				<p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-32 rounded-xl">Ups!! al parecer aun no tienes nada en el carrito</p>
			) : (
				<div className="flex flex-col gap-3 justify-center items-center w-3/5  m-auto flex-wrap ">
					{carrito.map((pizzaAgregada) => (
						<div key={pizzaAgregada.id} className="w-82 flex gap-3 justify-between items-center container m-auto flex-wrap mb-5">
							<div className="flex items-center gap-3 flex-wrap">
								<img className="w-36" src={pizzaAgregada.img} alt="" />
								<h3>{pizzaAgregada.name.toUpperCase()}</h3>
							</div>
							<div className=" flex font-medium gap-3 items-center ">
								<p>{`$ ${calcularPrecioTotal(pizzaAgregada)}`}</p>
								<div className="flex gap-2 items-center">
									<button className="px-2 py-1 border" onClick={() => decrementarCantidad(pizzaAgregada)}>
										-
									</button>
									<p className=" border p-1 px-3"> {pizzaAgregada.cantidad}</p>
									<button className="px-2 py-1 border" onClick={() => incrementarCantidad(pizzaAgregada)}>
										+
									</button>
								</div>
							</div>
						</div>
					))}
					<div className="flex flex-col">
						<p className="font-bold">{`Total a pagar: $${totalPagar}`}</p>
						<button className="flex items-center gap-1 mt-10 mx-auto border border-neutral-500 px-4 py-2 rounded-xl bg-green-300">Pagar</button>
					</div>
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
