import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AgentContext } from "../contexts/AgentContext";
import { AgentType } from "../types";

const SingleAgentPage = () => {
	const { allAgents } = useContext(AgentContext);

	const [currentAgent, setCurrentAgent] = useState<AgentType>();

	const params = useParams();

	useEffect(() => {
		setCurrentAgent(allAgents.find((eachAgent) => eachAgent.uuid === params.id));
	}, []);

	return (
		<>
			<Link className="flex justify-start items-center hover:underline" to="/agent">
				<img src="/left_arrow.svg" alt="Back Icon" className="w-4 h-4 mr-2" />
				<p>Go Back</p>
			</Link>
			<div className="flex flex-col gap-6 mt-36">
				<div className="flex justify-between items-center">
					<div className="w-full h-full">
						<img
							className="w-96 h-96 ml-16"
							src={currentAgent?.displayIcon}
							alt={currentAgent?.displayName}
						/>
					</div>
					<div className="w-full h-full flex flex-col items-center gap-12">
						<div className="flex flex-col gap-6">
							<p className="w-full text-start text-4xl font-semibold">{currentAgent?.displayName}</p>
							<p className="text-lg">{currentAgent?.description}</p>
						</div>
						<div className="w-full grid grid-cols-4 gap-3 items-center">
							{currentAgent?.abilities.map((eachAbility) => (
								<div
									className="w-max flex justify-center items-center flex-col gap-3"
									key={eachAbility.displayName}
								>
									<img
										className="w-16 h-16"
										src={eachAbility.displayIcon}
										alt={eachAbility.displayName}
									/>
									<p className="text-start text-xl font-semibold">{eachAbility.displayName}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleAgentPage;
