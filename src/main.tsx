import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// import layouts
import RootLayout from "./layouts/RootLayout.tsx";

// import pages
import HomePage from "./pages/HomePage.tsx";
import AgentList from "./pages/AgentList.tsx";
import SingleAgentPage from "./pages/SingleAgentPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/agent",
				element: <AgentList />,
			},
			{
				path: "/agent/:id",
				element: <SingleAgentPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
