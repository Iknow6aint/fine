import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import { localRestaurants } from '../data/localRestaurants';

import { Text, View } from 'react-native'
import Screen from '../components/Screen'

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <Screen>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Screen>
    )
}

export default HomeScreen