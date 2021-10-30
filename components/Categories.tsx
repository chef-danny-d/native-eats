import React from 'react'
import { Image, ScrollView, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const items = [
	{
		image: require('../assets/images/shopping-bag.png'),
		text: 'Pick-up',
	},
	{
		image: require('../assets/images/bread.png'),
		text: 'Bakery',
	},
	{
		image: require('../assets/images/coffee.png'),
		text: 'Coffee',
	},
	{
		image: require('../assets/images/desserts.png'),
		text: 'Desserts',
	},
	{
		image: require('../assets/images/soft-drink.png'),
		text: 'Soft Drinks',
	},
]

const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			style={{
				marginTop: 10,
				paddingLeft: 15,
				paddingRight: 15,
			}}
		>
			{items.map((item, index) => (
				<View
					style={{ alignItems: 'center', marginRight: 30 }}
					key={index}
				>
					<Image
						source={item.image}
						style={{ width: 50, height: 40, resizeMode: 'contain' }}
					/>
					<Text
						style={{
							fontSize: 13,
							fontWeight: '900',
						}}
					>
						{item.text}
					</Text>
				</View>
			))}
			<View style={{ alignItems: 'center', marginRight: 30 }}>
				<Entypo name="dots-three-horizontal" size={37} />
				<Text
					style={{
						fontSize: 13,
						fontWeight: '900',
					}}
				>
					All Categories
				</Text>
			</View>
		</ScrollView>
	)
}

export default Categories
