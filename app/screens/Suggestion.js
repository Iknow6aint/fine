import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native'
import { foods } from "../data/foodsData";


const Suggestion = () => {
    const [foods, setFoods] = useState(foods);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedMaxPrice, setSelectedMaxPrice] = useState('');

    const filterFoods = () => {
        let filteredResults = foods;

        if (selectedCategory !== '') {
            filteredResults = filteredResults.filter(
                (food) => food.category === selectedCategory
            );
        }

        if (selectedMaxPrice !== '') {
            filteredResults = filteredResults.filter(
                (food) => food.price <= selectedMaxPrice
            );
        }

        // Shuffle the array to get random results
        for (let i = filteredResults.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredResults[i], filteredResults[j]] = [
                filteredResults[j],
                filteredResults[i],
            ];
        }

        // Take the first 3 results
        const randomResults = filteredResults.slice(0, 3);
        setFilteredFoods(randomResults);
    }
    return (
        <View>
            <Text>Food Category:</Text>
            <Button
                title="Breakfast"
                onPress={() => setSelectedCategory('breakfast')}
            />
            <Button title="Lunch" onPress={() => setSelectedCategory('lunch')} />
            <Button title="Meals" onPress={() => setSelectedCategory('meals')} />

            <Text>Max Price:</Text>
            <Button title="5naira" onPress={() => setSelectedMaxPrice(5)} />
            <Button title="10 naira" onPress={() => setSelectedMaxPrice(10)} />
            <Button title="15 naira" onPress={() => setSelectedMaxPrice(15)} />

            <Button title="Filter" onPress={filterFoods} />

            <Text>Filtered Results:</Text>
            {filteredFoods.map((food) => (
                <Text key={food.id}>{food.name}</Text>
            ))}
        </View>
    )
}

export default Suggestion