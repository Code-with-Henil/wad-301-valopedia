import { useContext } from "react";
import { AgentContext } from "../contexts/AgentContext";

const Pagination = () => {
	const { currentPage, nextPage, previousPage } = useContext(AgentContext);

	return (
		<>
			<div className="flex justify-center items-center gap-8">
				<button
					onClick={previousPage}
					className="p-1 rounded-md border border-gray-400 text-gray-400 hover:text-white hover:border-white"
				>
					<img className="w-6 h-6" src="/left_arrow.svg" alt="Left Icon" />
				</button>
				<p>Page {currentPage}</p>
				<button
					onClick={nextPage}
					className="p-1 rounded-md border border-gray-400 text-gray-400 hover:text-white hover:border-white"
				>
					<img className="w-6 h-6" src="/right_arrow.svg" alt="Left Icon" />
				</button>
			</div>
		</>
	);
};

export default Pagination;
