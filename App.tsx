import * as React from 'react';
import { Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/containers/Home';
import StatisticsScreen from './src/containers/Statistics';
import CalendarScreen from './src/containers/Calendar';
import DetailsScreen from './src/containers/DetailsScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome,Ionicons,FontAwesome5 } from '@expo/vector-icons';
interface Route {
  name: string;
}

interface TabBarIconProps {
  focused?: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const screenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    let iconColor = focused?'tomato':'gray'
    switch (route.name) {
      case 'Home':
        return <FontAwesome name="home" size={24} color={iconColor} />
        break;
      case 'Statistics':
        return <Ionicons name="bar-chart" size={24} color={iconColor} />
        break;
      case 'Calendar':
        return <FontAwesome5 name="calendar-alt" size={24} color={iconColor} />
        break;
    }
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions} // 使用定義的 screenOptions 函數
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}