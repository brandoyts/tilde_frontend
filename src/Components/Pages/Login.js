import React from "react";
import LoginForm from "../LoginForm";

import { Flex } from "@chakra-ui/core";

function Login() {
	return (
		<Flex align="center" justify="center" className="login wrapper">
			<LoginForm />
		</Flex>
	);
}

export default Login;
