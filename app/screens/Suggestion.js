import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { foods } from "../data/foodsData";
import colors from '../configs/colors';
import tailwind from 'tailwind-react-native-classnames';
import Screen from '../components/Screen'
import SuggestionItem from "../components/SuggestionItem";
const tw = tailwind;



const Suggestion = ({ navigation }) => {
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
            <TouchableOpacity style={tailwind`absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow`} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={18} color={colors.black} />
            </TouchableOpacity>
            <Text style={tw`text-2xl mb-4`}>Budget App</Text>
            <TextInput
                style={tw`border border-gray-300 rounded w-64 px-4 py-2 mb-4`}
                placeholder="Enter your budget"
                onChangeText={handleBudgetInput}
            />
            <Button title="Get Recommendation" onPress={handleFilter} >
                <SuggestionItem breakfast={breakfast} lunch={lunch} dinner={dinner} />
            </Button>
        </View>
    )
}

export default Suggestion