import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

const RNIcon = createIconSetFromIcoMoon(
	require('../../assets/fonts/icomoon/selection.json'),
	'IcoMoon',
	'icomoon.ttf'
);

export default function Icon({
	size,
	iconColor,
	name,
	onPress,
	style,
	containerStyle,
}) {
	return (
		<Pressable
			hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
			onPress={onPress}
			style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, containerStyle]}
			disabled={!onPress}
		>
			<RNIcon
				onPress={onPress}
				style={style}
				name={name}
				color={iconColor}
				size={size}
			/>
		</Pressable>
	);
}

