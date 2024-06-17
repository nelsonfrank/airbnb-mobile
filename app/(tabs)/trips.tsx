import { StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View, Image } from "react-native";

export default function TripsScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					className='absolute bottom-0 left-0 w-[290] h-[178]'
				/>
			}
		>
			<ThemedView className='flex-row items-center gap-4'>
				<ThemedText type='title'>Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 1: Try it</ThemedText>
				<ThemedText>
					Edit{" "}
					<ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText>{" "}
					to see changes. Press{" "}
					<ThemedText type='defaultSemiBold'>
						{Platform.select({ ios: "cmd + d", android: "cmd + m" })}
					</ThemedText>{" "}
					to open developer tools.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView className='gap-4 mb-4'>
				<ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
				<ThemedText>
					When you're ready, run{" "}
					<ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText>{" "}
					to get a fresh <ThemedText type='defaultSemiBold'>app</ThemedText>{" "}
					directory. This will move the current{" "}
					<ThemedText type='defaultSemiBold'>app</ThemedText> to{" "}
					<ThemedText type='defaultSemiBold'>app-example</ThemedText>.
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}
