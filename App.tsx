import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import RootNavigation from './navigation'
import Home from './screens/Home'

export default function App() {
	const isLoadingComplete = useCachedResources()
	const Stack = createNativeStackNavigator()

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<SafeAreaProvider>
				<RootNavigation />
			</SafeAreaProvider>
		)
	}
}
