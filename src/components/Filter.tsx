import { useContext } from "react";
import { AgentContext } from "../contexts/AgentContext";

const Filter = () => {
	const { roleNames, currentFilter, changeFilter } = useContext(AgentContext);

	return (
		<select
			onChange={(e) => {
				changeFilter(e.target.value);
			}}
			defaultValue={currentFilter}
			className="bg-transparent w-[250px] px-4 py-2 text-white font-semibold text-lg"
		>
			<option className="bg-black" value="All" disabled>
				Filter by Roles
			</option>
			<option className="bg-black" value="all">
				All Roles
			</option>
			{roleNames.map((eachRole, index) => (
				<option key={index} className="bg-black" value={eachRole}>
					{eachRole}
				</option>
			))}
		</select>
	);
};

export default Filter;
