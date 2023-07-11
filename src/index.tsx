import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

const App: React.FC = () => {
	return <Counter />;
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
