import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native'

const Suggestion = () => {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    const SPOONACULARKEY = "228b85d55b0c4212abcd7c98991d95fa"
    function getMealData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=${SPOONACULARKEY}&timeFrame=day&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            });
    }
    return (
        <View>
            <Button
                onPress={getMealData}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            >Get meal Plan</Button>
            <Text>{mealData}</Text>
        </View>
    )
}

export default Suggestion