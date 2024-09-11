import { useState, createContext, useEffect } from "react";
import { AgentType } from "../types";

type AgentContextType = {
	allAgents: AgentType[];
	currentPage: number;
	agentsToDisplay: AgentType[];
	roleNames: string[];
	currentFilter: string;
	nextPage: () => void;
	previousPage: () => void;
	changeFilter: (newFilter: string) => void;
};

export const AgentContext = createContext<AgentContextType>({
	allAgents: [],
	currentPage: 1,
	agentsToDisplay: [],
	roleNames: [],
	currentFilter: "all",
	nextPage: () => {},
	previousPage: () => {},
	changeFilter: () => {},
});

export const AgentProvider = ({ children }: any) => {
	const [allAgents, setAllAgents] = useState<AgentType[]>([]);
	const [agentsToDisplay, setAgentsToDisplay] = useState<AgentType[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentFilter, setCurrentFilter] = useState<string>("all");
	const [roleNames, setRoleNames] = useState<string[]>([]);

	useEffect(() => {
		fetchAllAgents();
	}, []);

	useEffect(() => {
		setAgentsToDisplay(allAgents.slice(currentPage * 10 - 10, currentPage * 10));

		if (currentFilter !== "all") {
			const filteredAgents: any[] = allAgents.filter((eachAgent) => {
				if (eachAgent.role.displayName === currentFilter) {
					return eachAgent;
				}
			});

			if (filteredAgents) {
				setAgentsToDisplay([...filteredAgents]);
			}
		}
	}, [currentPage, currentFilter]);

	const fetchAllAgents = async () => {
		const response = await fetch("https://valorant-api.com/v1/agents");
		const data = await response.json();

		const agentData: AgentType[] = data.data.map((eachAgent: any) => {
			return {
				uuid: eachAgent.uuid,
				displayName: eachAgent.displayName,
				description: eachAgent.description,
				displayIcon: eachAgent.displayIcon || "/vite.svg",
				background: eachAgent.background,
				role: eachAgent.role,
				abilities: eachAgent.abilities,
			} as AgentType;
		});

		// removing the extra Sova coming from the API
		agentData.splice(9, 1);

		// setting up the roles here
		const allRoles = agentData.map((eachAgent) => {
			return eachAgent.role.displayName;
		});
		setRoleNames([...new Set(allRoles)] as string[]);

		// setting the up the agents based on the page number 1
		setAllAgents(agentData);
		setAgentsToDisplay(agentData.slice(0, 10));
	};

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	const changeFilter = (newFilter: string) => {
		setCurrentFilter(newFilter);
	};

	return (
		<AgentContext.Provider
			value={{
				allAgents,
				currentPage,
				agentsToDisplay,
				roleNames,
				currentFilter,
				nextPage,
				previousPage,
				changeFilter,
			}}
		>
			{children}
		</AgentContext.Provider>
	);
};
