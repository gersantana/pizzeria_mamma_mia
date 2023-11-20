import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/IndexPage/IndexPage";
import Carrito from "../pages/Carrito/Carrito";
import PizzaDetail from "../pages/PizzaDetail/PizzaDetail";
import { NotFoundPage } from "../pages/NotFoundPage";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/pizzeria_mamma_mia" element={<IndexPage />}></Route>
			<Route path="/pizzeria_mamma_mia/pizza/:id" element={<PizzaDetail />}></Route>
			<Route path="/pizzeria_mamma_mia/carrito" element={<Carrito />}></Route>
			<Route path="*" element={<NotFoundPage />}></Route>
		</Routes>
	);
};

export default MyRoutes;
