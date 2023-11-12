import { createContext } from "react";
import PropsTypes from  "prop-types"

export const PizzaPageContext = createContext();

const dataProvider = {};
export const PizzaPageProvider = ({children}) => {
	return <PizzaPageContext.Provider value={dataProvider}>{children}</PizzaPageContext.Provider>;
};

PizzaPageProvider.propTypes = {
    children: PropsTypes.object.isRequired
}