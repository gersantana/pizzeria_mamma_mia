import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const PizzaPageContext = createContext();

export const PizzaPageProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [pizzas, setPizzas] = useState([]);
	const [carrito, setCarrito] = useState([]);

	//Funcion regresar pag anterior
	const navigate = useNavigate();
	const regresar = () => {
		navigate(-1);
	};

	useEffect(() => {
		const getPizzas = async () => {
			try {
				const res = await fetch("/pizzas.json");
				const data = await res.json();
				if (data) {
					setPizzas(data);
					setLoading(false);
				}
			} catch (error) {
				console.error("error al cargar la data", error);
			}
		};
		getPizzas();
	}, []);

	const agregarAlCarrito = (pizza) => {
		const pizzaEnCarrito = carrito.find((p) => p.id === pizza.id);

		if (pizzaEnCarrito) {
			// Si la pizza ya está en el carrito, incrementa la cantidad
			const nuevoCarrito = carrito.map((p) => (p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p));
			setCarrito(nuevoCarrito);
		} else {
			// Si la pizza no está en el carrito, agrégala con cantidad 1
			setCarrito([...carrito, { ...pizza, cantidad: 1 }]);
		}
	};

	const totalPizzas = carrito.reduce((totalPizzas, pizza) => totalPizzas + pizza.cantidad, 0);
	console.log(totalPizzas);

    const totalPagar = carrito.reduce((totalPagar, pizza) => totalPagar + pizza.price * pizza.cantidad, 0)
    console.log(totalPagar)

    
	console.log("carrito", carrito);

	//VARIABLES A PROVEER EN EL CONTEX
	const dataProvider = {
		pizzas,
		loading,
		carrito,
		setCarrito,
		agregarAlCarrito,
		regresar,
        totalPizzas,
        totalPagar
    };
	console.log("datos de las pizzas", pizzas);

	return <PizzaPageContext.Provider value={dataProvider}>{children}</PizzaPageContext.Provider>;
};

PizzaPageProvider.propTypes = {
	children: PropsTypes.object.isRequired,
};
