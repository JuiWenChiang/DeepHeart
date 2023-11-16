import React from 'react';
import { View, Text, Button } from 'react-native';

interface TabBarIconProps {
    activeTintColor: string;
    inactiveTintColor: string;
  }

const appBarColor:TabBarIconProps = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
}

export default {
    appBarColor
}