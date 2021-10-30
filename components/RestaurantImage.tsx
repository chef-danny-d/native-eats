import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

interface RestaurantImageProps {
	image_url: string
}

const RestaurantImage: React.FC<RestaurantImageProps> = ({ image_url }) => {
	return (
		<>
			<TouchableOpacity>
				<Image
					source={image_url}
					style={{
						width: '100%',
						minWidth: '180px',
						minHeight: '180px',
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ position: 'absolute', right: 20, top: 20 }}
			>
				<MaterialCommunityIcons
					name="heart-outline"
					size={25}
					color="white"
				/>
			</TouchableOpacity>
		</>
	)
}

export default RestaurantImage
