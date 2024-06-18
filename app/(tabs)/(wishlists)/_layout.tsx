import { Stack } from "expo-router";

export default function WishlistsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='index' />
		</Stack>
	);
}
