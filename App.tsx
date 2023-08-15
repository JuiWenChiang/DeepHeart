// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import HomePage from './pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DeepHeart</Text>
    </View>
  );
}

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
