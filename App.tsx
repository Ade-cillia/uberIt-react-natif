/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/screens/Home.screen';
import ProfileScreen from './src/screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './src/shared/components/Icon/icon.component';
import FavoritesScreen from './src/screens/Favorites.screen';
import CartScreen from './src/screens/Cart.screen';
const Tab = createBottomTabNavigator();

const Screen = {
  Home: {
    name: 'Home',
    icon: 'home',
  },
  Favorites: {
    name: 'Favorites',
    icon: 'heart',
  },
  Cart: {
    name: 'Cart',
    icon: 'cart',
  },
  Profile: {
    name: 'Profile',
    icon: 'profile',
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Screen.Home.name}
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icon
              name={Screen[route.name as keyof typeof Screen].icon}
              width={size}
              height={size}
              fill={color}
            />
          ),
          tabBarActiveTintColor: '#2a4ad4',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#f5f5f5',
            borderTopWidth: 1,
            borderTopColor: '#dcdcdc',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333',
          },
          headerShown: false,
        })}>
        <Tab.Screen name={Screen.Home.name} component={HomeScreen} />
        <Tab.Screen name={Screen.Favorites.name} component={FavoritesScreen} />
        <Tab.Screen name={Screen.Cart.name} component={CartScreen} />
        <Tab.Screen name={Screen.Profile.name} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
