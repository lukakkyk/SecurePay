import React from 'react';
import { View, StyleSheet } from 'react-native';

function Box({ children, noPaddings, noMargins, containerStyle }) {
	return (
		<View
			style={[
				styles.container,
				containerStyle,
				noPaddings && { paddingHorizontal: 0 },
				noMargins && { marginHorizontal: 0 },
			]}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fffF',
		borderRadius: 12,
		paddingHorizontal: 25,
		paddingVertical: 10,
		shadowColor: 'rgba(0,0,0,0.22)',
		shadowRadius: 15,
		elevation: 9,
		shadowOpacity: 0.32,
		marginVertical: 10,
		marginHorizontal: 20,
	},
});

export default Box;
