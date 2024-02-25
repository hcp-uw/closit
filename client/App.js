import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SomeComponent from './src/SomeComponent';
import Outfits from './src/outfits/Outfits';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>This is me testing how to use Expo Go!</Text>
        <Text>This is me testing a merge req</Text>
        <StatusBar style="auto" />
      </View>
      <Tab.Navigator>
        <Tab.Screen 
          name="SomeComponent" component={SomeComponent} />
        <Tab.Screen 
          name="Outfits" component={Outfits}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});