import { Link } from "react-router-dom";

export const NotFoundPage = () => {

	return (
		<div className="text-center flex flex-col container m-auto">
			<p className="text-center font-bold mt-40 text-4xl">Not Found Page error 404</p>
			<p className="text-center mt-5 text-2xl ">Ohh no!!! Parece que lo que estas buscando se ha vuelto loco.... mejor regresamos a Nuestras Pizzas antes de que se ENFRÍEN</p>
			<div>
				<Link to="pizzeria_mamma_mia" className="inline-block px-4 py-2 bg-green-400 rounded-xl mt-10">
					A las Pizzas!!!
				</Link>
			</div>
		</div>
	);
};
