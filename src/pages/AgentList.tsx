import { useContext } from "react";
import { AgentContext } from "../contexts/AgentContext";
import { AgentType } from "../types";
import AgentCard from "../components/AgentCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

const AgentList = () => {
	const { agentsToDisplay } = useContext(AgentContext);

	return (
		<>
			<div className="flex justify-between items-center">
				<Filter />
				<Pagination />
			</div>
			<section className="w-full mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-6">
				{agentsToDisplay.length > 0 ? (
					<>
						{agentsToDisplay.map((eachAgent: AgentType) => (
							<AgentCard key={eachAgent.uuid} eachAgent={eachAgent} />
						))}
					</>
				) : (
					<>Error Fetching Agents, Please try again later</>
				)}
			</section>
		</>
	);
};

export default AgentList;
