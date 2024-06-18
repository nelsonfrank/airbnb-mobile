import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarStyle: {
					height: 70,
				},
				tabBarItemStyle: {
					marginVertical: 5,
					marginHorizontal: 5,
				},
			}}
		>
			<Tabs.Screen
				name='(explore)'
				options={{
					title: "Explore",
					tabBarIcon: ({ color, focused }) => (
						<Octicons name='search' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='(wishlists)'
				options={{
					title: "Wishlists",
					tabBarIcon: ({ color, focused }) => (
						<Octicons name='heart' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='(trips)'
				options={{
					title: "Trips",
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome5 name='airbnb' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='(messages)'
				options={{
					title: "Messages",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name='chatbox-outline' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='(profile)'
				options={{
					title: "Profile",
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome6 name='user-circle' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
