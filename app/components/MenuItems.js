import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { foods } from '../data/foodsData'
import tailwind from 'tailwind-react-native-classnames';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../configs/colors';

const MenuItems = () => {
    return (
        <View style={tailwind`mt-5 mb-12`}>
            {foods?.map(({ title, description, image, price, id }, index) => (
                <View style={tailwind`mb-3 flex-row justify-between items-center pb-3 border-b border-gray-100`} key={index} >
                    <View style={tailwind`flex-1 pr-3 flex-row items-center`}>
                        {match(id) ? (
                            <BouncyCheckbox fillColor={colors.black} isChecked={true} onPress={() => handleAddRemove(id)} />
                        ) : (
                            <BouncyCheckbox fillColor={colors.black} isChecked={false} onPress={() => handleAddRemove(id)} />
                        )}
                        <View style={tailwind`flex-1 pl-2`}>
                            <Text style={[tailwind`text-gray-900 font-bold mb-1`, { fontSize: 16 }]}>{title}</Text>
                            <Text style={tailwind`text-gray-800 text-xs`}>${price}</Text>
                            <Text style={tailwind`text-gray-600 text-xs`}>{description}</Text>
                        </View>
                    </View>
                    <View style={tailwind``} >
                        <Image style={tailwind`h-16 w-16 rounded-lg`} source={{ uri: image }} />
                    </View>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({})
export default MenuItems