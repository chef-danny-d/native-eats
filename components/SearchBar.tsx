import { AntDesign, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

interface SearchBarProps {
	cityHandler: (location: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ cityHandler }) => {
	return (
		<View style={{ marginTop: 15, flexDirection: 'row' }}>
			<GooglePlacesAutocomplete
				query={{ key: 'AIzaSyAMZnqz8UCPYJ_iYLSjR8PjhNm0g0kx-T8' }}
				onPress={(data, details = null) => {
					const city = data.description
					cityHandler(city)
				}}
				requestUrl={{
					useOnPlatform: 'all',
					url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
				}}
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: '#eee',
						borderRadius: 20,
						fontWeight: '700',
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: '#eee',
						borderRadius: 50,
						flexDirection: 'row',
						alignItems: 'center',
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10 }}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: 'row',
							marginRight: 8,
							backgroundColor: 'white',
							padding: 9,
							borderRadius: 30,
							alignItems: 'center',
						}}
					>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{ marginRight: 6, marginTop: 2 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	)
}

export default SearchBar
