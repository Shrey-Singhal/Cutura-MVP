import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Drafts from '../drafts'
import Finished from '../finished'

const Tab = createMaterialTopTabNavigator();
const designs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarIndicatorStyle: {backgroundColor: "black"}}}>
        <Tab.Screen name="Drafts" component={Drafts} />
        <Tab.Screen name="Finished" component={Finished} />
    </Tab.Navigator>
    
  )
}

export default designs