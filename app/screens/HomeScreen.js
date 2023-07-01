import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import { localRestaurants } from '../data/localRestaurants';

import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import Screen from '../components/Screen'
import Categories from '../components/Categories';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <Screen>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ScrollView>
                <Categories />
            </ScrollView>
        </Screen>
    )
}

export default HomeScreen