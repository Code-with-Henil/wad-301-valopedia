export type AgentType = {
	uuid: string;
	displayName: string;
	description: string;
	displayIcon: string;
	background: string;
	role: AgentRoleType;
	abilities: AbilityType[];
};

type AgentRoleType = {
	uuid: string;
	displayName: string;
	description: string;
	displayIcon: string;
};

type AbilityType = {
	slot: "Ability1" | "Ability2" | "Grenade" | "Ultimate";
	displayName: string;
	description: string;
	displayIcon: string;
};
