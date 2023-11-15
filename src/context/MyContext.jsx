import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";

export const PizzaPageContext = createContext();

export const PizzaPageProvider = ({ children }) => {

	const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const getPizzas = async () => {
        try {
            const res = await fetch("/pizzas.json");
            const data = await res.json();
            setPizzas(data);
        } catch (error) {
            console.error("error al cargar la data", error);
        }
    };
  
     getPizzas()
	},[]);
 

    //VARIABLES A PROVEER EN EL CONTEX
    const dataProvider = {
		pizzas,
	};
    console.log("datos de las pizzas",pizzas);

	return(
        <PizzaPageContext.Provider value={dataProvider}>
            {children}
        </PizzaPageContext.Provider>
    ) 
};

PizzaPageProvider.propTypes = {
	children: PropsTypes.object.isRequired,
};
