import React from 'react';
import { Pressable as RNPressable } from 'react-native';

function Pressable({ style, children, ...rest }) {
	return (
		<RNPressable
			style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, style]}
			{...rest}
		>
			{children}
		</RNPressable>
	);
}

export default Pressable;
