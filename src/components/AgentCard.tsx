import { Link } from "react-router-dom";
import { AgentType } from "../types";

type AgentCardProps = {
	eachAgent: AgentType;
};

const AgentCard = ({ eachAgent }: AgentCardProps) => {
	return (
		<Link
			to={`/agent/${eachAgent.uuid}`}
			key={eachAgent.uuid}
			className="flex flex-col gap-6 p-6 rounded-md border border-gray-500 hover:bg-slate-800 hover:cursor-pointer"
		>
			<div className="flex justify-between items-center">
				<p className="text-2xl font-semibold text-center">{eachAgent.displayName}</p>
				<img className="w-7 h-7 ml-auto" src={eachAgent.role?.displayIcon} alt={eachAgent.role.displayName} />
			</div>
			<img className="w-32 h-32 mx-auto" src={eachAgent.displayIcon} alt={eachAgent.displayName} />
		</Link>
	);
};

export default AgentCard;
