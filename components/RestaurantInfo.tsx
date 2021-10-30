import React from 'react'
import { View, Text } from 'react-native'

interface RestaurantInfoProps {
	name: string
	rating: number
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ name, rating }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: '0.75em',
			}}
		>
			<View>
				<Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
				<Text style={{ fontSize: 13, color: 'gray' }}>
					Wait time • min
				</Text>
			</View>
			<View
				style={{
					backgroundColor: '#eee',
					height: 30,
					width: 30,
					alignItems: 'center',
					borderRadius: 15,
					justifyContent: 'center',
				}}
			>
				<Text>{rating}</Text>
			</View>
		</View>
	)
}

export default RestaurantInfo
