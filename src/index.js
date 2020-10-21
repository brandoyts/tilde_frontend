import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import AuthProvider from "./store/Auth/AuthProvider";

const Index = ({ children }) => {
	return (
		<div className="Index">
			<AuthProvider>
				<ThemeProvider>
					<CSSReset />
					{children}
				</ThemeProvider>
			</AuthProvider>
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
