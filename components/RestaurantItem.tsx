import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import RestaurantImage from './RestaurantImage'
import RestaurantInfo from './RestaurantInfo'

interface RestaurantItemProps {
	restaurantData: []
	loading: boolean
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
	restaurantData,
	loading,
	...props
}) => {
	console.log(restaurantData)

	return loading && restaurantData !== null ? (
		<>Loading...</>
	) : (
		<>
			{restaurantData?.map((restaurant, index) => (
				<TouchableOpacity
					activeOpacity={1}
					style={{ marginBottom: '0.5em' }}
					key={index}
				>
					<View
						style={{
							marginTop: '1em',
							backgroundColor: 'white',
							padding: 15,
						}}
					>
						<RestaurantImage
							categories={restaurant.categories}
							image_url={restaurant.image_url}
						/>
						<RestaurantInfo
							rating={restaurant.rating}
							name={restaurant.name}
						/>
					</View>
				</TouchableOpacity>
			))}
		</>
	)
}

export default RestaurantItem
