import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from "./src/components/BottomNavigationBar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>This is me testing how to use Expo Go!</Text>
        <Text>This is me testing a merge req</Text>
        <StatusBar style="auto" />
      </View>
      <BottomNavigationBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});