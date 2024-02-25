import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      <BottomNavigationBar />
    </NavigationContainer>
  );
}

function BottomNavigationBar() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#22333B',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'SomeComponent') {
              iconName = 'hanger';
            }
            else if (route.name === 'Outfits') {
              iconName = 'tshirt-crew-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7F7F7F',
          tabBarInactiveTintColor: '#FFFFFF',
        })}
      >
        <Tab.Screen 
          name="SomeComponent" component={SomeComponent} />
        <Tab.Screen 
          name="Outfits" component={Outfits}/>
      </Tab.Navigator>
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