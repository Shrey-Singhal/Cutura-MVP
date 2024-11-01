import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Slot, Tabs } from 'expo-router'
import { FontAwesome, Fontisto, Octicons, AntDesign } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
const Layout = () => {
  return (
    <GestureHandlerRootView style = {{flex: 1}}>
      <BottomSheetModalProvider>
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black', headerShown: false }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
          />
          <Tabs.Screen
            name="marketplace"
            options={{
              title: 'marketplace',
              tabBarIcon: ({ color }) => <Fontisto size={26} name="shopping-store" color={color} />,
            }}
          />
          <Tabs.Screen
            name="studio"
            options={{
              title: 'studio',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-circle" color={color} />,
            }}
          />
          <Tabs.Screen
            name="designs"
            options={{
              title: 'designs',
              tabBarIcon: ({ color }) => <Octicons size={28} name="project" color={color} />,
            }}
          />
          <Tabs.Screen
            name="shoppingCart"
            options={{
              title: 'Cart',
              tabBarIcon: ({ color }) => <AntDesign size={28} name="shoppingcart" color={color} />
            }}
          />
        </Tabs>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
  );
}

export default Layout