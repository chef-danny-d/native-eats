import React from 'react'
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ButtonProps,
} from 'react-native'

function HeaderTabs() {
	const [activeTab, setActiveTab] = React.useState('Delivery')
	return (
		<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
			<HeaderButton
				text="Delivery"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	)
}

interface HeaderButtonProps {
	text: string
	activeTab: string
	setActiveTab: (tab: string) => void
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
	text,
	setActiveTab,
	activeTab,
}) => {
	return (
		<View>
			<TouchableOpacity
				style={{
					backgroundColor: activeTab === text ? '#000' : '#fff',
					paddingVertical: 6,
					paddingHorizontal: 16,
					borderRadius: 30,
				}}
				onPress={() => setActiveTab(text)}
			>
				<Text
					style={{
						color: activeTab === text ? '#fff' : '#000',
						fontSize: 15,
						fontWeight: '900',
					}}
				>
					{text}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HeaderTabs
