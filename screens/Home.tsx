import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import HeaderTabs from '../components/HeaderTabs'
import Categories from '../components/Categories'
import { View, ScrollView } from 'react-native'
import RestaurantItem from '../components/RestaurantItem'
import axios from 'axios'
import { getRestaurantsFromYelp } from '../utils/fetch'

function Home({ navigation }) {
	const [city, setCity] = useState('San Francisco')
	const [restaurants, setRestaurants] = useState(null)
	const [activeTab, setActiveTab] = useState('Delivery')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getRestaurantsFromYelp(city)
			.then((res) => {
				setRestaurants(res)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [city, activeTab])

	return (
		<SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
			<View style={{ backgroundColor: 'white', padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItem
					loading={loading}
					restaurantData={restaurants}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
