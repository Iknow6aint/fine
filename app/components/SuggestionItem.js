import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tailwind from 'tailwind-react-native-classnames';
const tw = tailwind


function SuggestionItem({ breakfast, lunch, dinner }) {
    return (
        <View>
            {breakfast && (
                <View style={tw`mt-8`}>
                    <Text style={tw`text-lg font-bold`}>Breakfast:</Text>
                    {breakfast.map((item, index) => (
                        <Text key={index} style={tw`ml-2`}>
                            {item.title} - ${item.price} Naira
                        </Text>
                    ))}
                </View>
            )}
            {lunch && (
                <View style={tw`mt-8`}>
                    <Text style={tw`text-lg font-bold`}>Lunch:</Text>
                    {lunch.map((item, index) => (
                        <Text key={index} style={tw`ml-2`}>
                            {item.title} - {item.price} Naira
                        </Text>
                    ))}
                </View>
            )}
            {dinner && (
                <View style={tw`mt-8`}>
                    <Text style={tw`text-lg font-bold`}>Dinner:</Text>
                    {dinner.map((item, index) => (
                        <Text key={index} style={tw`ml-2`}>
                            {item.title} - {item.price} Naira
                        </Text>
                    ))}
                </View>
            )}
        </View>
    )
}

export default SuggestionItem