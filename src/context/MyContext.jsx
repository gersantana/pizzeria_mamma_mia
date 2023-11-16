import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";

export const PizzaPageContext = createContext();

export const PizzaPageProvider = ({ children }) => {

	const [loading, setLoading] = useState(true);
	const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([])

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

    //Funcion de captar datos para carrito
    const agregarAlCarrito = (pizza) => {
        setCarrito([...carrito, pizza])
    }
    console.log("carrito", carrito)
    
	//VARIABLES A PROVEER EN EL CONTEX
	const dataProvider = {
		pizzas,
		loading,
        carrito,
        agregarAlCarrito
	};
	console.log("datos de las pizzas", pizzas);

	return <PizzaPageContext.Provider value={dataProvider}>{children}</PizzaPageContext.Provider>;
};

PizzaPageProvider.propTypes = {
	children: PropsTypes.object.isRequired,
};
