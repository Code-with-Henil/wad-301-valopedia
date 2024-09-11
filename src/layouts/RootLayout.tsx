import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AgentProvider } from "../contexts/AgentContext";

const RootLayout = () => {
	return (
		<AgentProvider>
			<main className="w-full h-screen flex flex-col gap-6 bg-black text-white">
				<Navbar />
				<div className="container h-full mx-auto">
					<Outlet />
				</div>
				<Footer />
			</main>
		</AgentProvider>
	);
};

export default RootLayout;
