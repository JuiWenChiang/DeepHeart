import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './src/containers/Home';
import StatisticsScreen from './src/containers/Statistics';
import CalendarScreen from './src/containers/Calendar';

import systemStyle from './src/storage/systemStyle';

interface Route {
  name: string;
}

interface TabBarIconProps {
  focused?: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }: { route: Route }) => ({
  tabBarActiveTintColor: systemStyle.appBarColor.activeTintColor,
  tabBarInactiveTintColor: systemStyle.appBarColor.inactiveTintColor,
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    let iconColor = focused
      ? systemStyle.appBarColor.activeTintColor
      : systemStyle.appBarColor.inactiveTintColor;

    switch (route.name) {
      case 'Home':
        return <FontAwesome name="home" size={24} color={iconColor} />
      case 'Statistics':
        return <Ionicons name="bar-chart" size={24} color={iconColor} />
      case 'Calendar':
        return <FontAwesome5 name="calendar-alt" size={24} color={iconColor} />
    }
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}