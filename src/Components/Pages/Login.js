import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import {
	Flex,
	Box,
	Stack,
	InputGroup,
	InputLeftAddon,
	Input,
	Icon,
	Button,
	Text,
} from "@chakra-ui/core";
import { AuthContext } from "../../store/Auth/AuthProvider";
import { AUTH_LOGIN, AUTH_FETCH, AUTH_FAIL } from "../../store/action_types.js";

function Login() {
	const [error, setError] = useState(null);
	const [inputValues, setInputValues] = useState({
		username: "",
		password: "",
	});

	const history = useHistory();
	const { state, dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		const key = e.target.id;
		const value = e.target.value;

		setInputValues({
			...inputValues,
			[key]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValues.username === "" || inputValues.password === "") return;

		dispatch({ type: AUTH_FETCH });

		const user = {
			username: inputValues.username,
			password: inputValues.password,
		};

		axios
			.post("http://localhost:8000/api/v1/authenticate/login", user)
			.then((res) => {
				const token = res.headers.authorization;
				const user = res.data.user;
				dispatch({ type: AUTH_LOGIN, payload: { token, user } });
				history.push("/");
			})
			.catch((err) => {
				setError(err.response.data.error);
				dispatch({ type: AUTH_FAIL });
			});
	};

	// if (state.user) return <Redirect to="/" />;

	return (
		<Flex align="center" justify="center" className="login wrapper">
			<Box className="login-form" maxWidth={500} p={4}>
				<Stack spacing={4}>
					<Text
						as="h3"
						textAlign="center"
						fontSize={32}
						paddingBottom={5}
					>
						`Tilde`
					</Text>

					{error && (
						<Text as="p" color="red.500" textAlign="center">
							{error}
						</Text>
					)}
					<InputGroup size="md">
						<InputLeftAddon children={<Icon name="lock" />} />
						<Input
							id="username"
							onChange={handleChange}
							focusBorderColor="teal.500"
							type="text"
							roundedLeft="0"
							placeholder="Username..."
							value={inputValues.username}
						/>
					</InputGroup>

					<InputGroup size="md">
						<InputLeftAddon children={<Icon name="lock" />} />
						<Input
							id="password"
							onChange={handleChange}
							focusBorderColor="teal.500"
							type="password"
							roundedLeft="0"
							placeholder="Password..."
							value={inputValues.password}
						/>
					</InputGroup>

					<Button
						onClick={handleSubmit}
						focusBorderColor={null}
						variantColor="teal"
						outline="red"
						lodaingText="Authenticating"
						isLoading={state.authLoading}
					>
						Login
					</Button>
				</Stack>
			</Box>
		</Flex>
	);
}

export default Login;
