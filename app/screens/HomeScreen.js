import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import { localRestaurants } from '../data/localRestaurants';

import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import Screen from '../components/Screen'
import Categories from '../components/Categories';
import colors from '../configs/colors'
import tailwind from 'tailwind-react-native-classnames';
import RestaurantItem from '../components/RestaurantItem';



const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [loading, setLoading] = useState(false)
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