import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import { foods } from "../data/foodsData";
import colors from '../configs/colors';
import tailwind from 'tailwind-react-native-classnames';
import Screen from '../components/Screen'
const tw = tailwind;



const Suggestion = () => {
    const [budget, setBudget] = useState('');
    const [breakfast, setBreakfast] = useState(null);
    const [lunch, setLunch] = useState(null);
    const [dinner, setDinner] = useState(null);

    const handleBudgetInput = (text) => {
        setBudget(text);
    };

    const handleFilter = () => {
        const filteredFood = foods.filter((food) => food.price <= budget);

        const breakfastItems = filteredFood.filter(
            (food) => food.category == 'Breakfast'
        );
        const lunchItems = filteredFood.filter((food) => food.category == 'Lunch');
        const dinnerItems = filteredFood.filter(
            (food) => food.category == 'Dinner'
        );

        setBreakfast(breakfastItems.slice(0, 3));
        setLunch(lunchItems.slice(0, 3));
        setDinner(dinnerItems.slice(0, 3));

        console.log(breakfast, lunch, dinner);

    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Text style={tw`text-2xl mb-4`}>Budget App</Text>
            <TextInput
                style={tw`border border-gray-300 rounded w-64 px-4 py-2 mb-4`}
                placeholder="Enter your budget"
                onChangeText={handleBudgetInput}
                keyboardType="numeric"
            />
            <Button title="Filter" onPress={handleFilter} />
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

export default Suggestion