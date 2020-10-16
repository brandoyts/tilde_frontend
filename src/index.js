import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./css/custom.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const Index = ({ children }) => {
	return (
		<div className="Index">
			<ThemeProvider>
				<CSSReset />
				{children}
			</ThemeProvider>
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Index>
			<App />
		</Index>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
