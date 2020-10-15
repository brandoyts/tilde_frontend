import React from "react";
import {
	Box,
	Stack,
	InputGroup,
	InputLeftAddon,
	Input,
	Icon,
	Button,
	Text,
} from "@chakra-ui/core";

function LoginForm() {
	return (
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
				<InputGroup size="md">
					<InputLeftAddon children={<Icon name="lock" />} />
					<Input
						focusBorderColor="teal.500"
						type="text"
						roundedLeft="0"
						placeholder="Username..."
					/>
				</InputGroup>

				<InputGroup size="md">
					<InputLeftAddon children={<Icon name="lock" />} />
					<Input
						focusBorderColor="teal.500"
						type="password"
						roundedLeft="0"
						placeholder="Password..."
					/>
				</InputGroup>

				<Button
					focusBorderColor={null}
					variantColor="teal"
					outline="red"
					lodaingText="Authenticating"
				>
					Login
				</Button>
			</Stack>
		</Box>
	);
}

export default LoginForm;
