import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import { localRestaurants } from '../data/localRestaurants';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import Screen from '../components/Screen'
import Categories from '../components/Categories';
import colors from '../configs/colors'
import tailwind from 'tailwind-react-native-classnames';
import RestaurantItem from '../components/RestaurantItem';

const YELP_API_KEY = "cY7HJSY-ONIDnzQQx8zLSw1c0wIW_DgKNbu9-vGvsmp_ompJYAUWzR7aHw_CCvNgvU56ipSbraKndfzTEddwOzE28zdKgYnjyNRYYDDu4B4a6OIxfH3fjjdfWBO6YnYx";


const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("Holywood")
    const [loading, setLoading] = useState(false)
    function getRestaurantsFromYelp() {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        setLoading(true)
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                if (json.error) return Alert.alert('Sorry', json.error.description);
                setRestaurantData(
                    json?.businesses?.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        return// Remove return after adding Yelp API key
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    return (
        <Screen>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ScrollView>
                <Categories />
                {loading && <ActivityIndicator size="large" color={colors.primary} style={tailwind`mt-2 mb-6`} />}
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </Screen>
    )
}

export default HomeScreen