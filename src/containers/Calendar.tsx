import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const MyComponent = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => { }} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="calendar" onPress={() => { }} />
    <Appbar.Action icon="magnify" onPress={() => { }} />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25, // 设置字体大小为 24
    fontWeight: 'bold',
    color: 'blue',
  },
});

function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Action icon="calendar" onPress={() => { }} />
      <Text style={styles.heading}>Calendar</Text>
    </View>
  );
}

export default CalendarScreen;
