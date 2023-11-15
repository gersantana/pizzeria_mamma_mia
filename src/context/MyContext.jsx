import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";

export const PizzaPageContext = createContext();

export const PizzaPageProvider = ({ children }) => {

	const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        try {
            const res = await fetch("src/data/pizzas.json");
            const data = await res.json();
            setPizzas(data);
        } catch (error) {
            console.error("error al cargar la data", error);
        }
    };
  

    useEffect(() => {
        getPizzas()
	},[]);
 
    // ACTUALIZA CUANDO SE MODIFICA O CAMBIA PIZZAS
    // useEffect(()=>{
    // },[pizzas])

    //VARIABLES A PROVEER EN EL CONTEX
    const dataProvider = {
		pizzas,
        getPizzas
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
