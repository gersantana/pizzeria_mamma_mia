import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/IndexPage/IndexPage";
import Carrito from "../pages/Carrito/Carrito";
import PizzaDetail from "../pages/PizzaDetail/PizzaDetail";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />}></Route>
			<Route path="/pizza/:id" element={<PizzaDetail />}></Route>
			<Route path="/carrito" element={<Carrito />}></Route>
		</Routes>
	);
};

export default MyRoutes;
