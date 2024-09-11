import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="bg-black text-white w-full h-16 min-h-16 border-b-2 border-gray-500">
			<nav className="container mx-auto h-full flex justify-between items-center">
				<Link to="/" className="flex justify-start items-center gap-3">
					<img className="w-8 h-8" src="/vite.svg" alt="Logo" />
					<p className="text-xl font-semibold">ValoPedia</p>
				</Link>
				<div className="flex justify-end items-center gap-8">
					<NavLink
						className="text-gray-400 hover:text-white hover:cursor-pointer transition-colors duration-200"
						to="/agent"
					>
						Agents
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
