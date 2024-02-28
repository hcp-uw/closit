import React from 'react'
import { View } from 'react-native';
import SomeComponent from '../SomeComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Outfits from '../outfits/Outfits'
import Camera from '../testPages/Camera';
import Inspiration from '../testPages/Inspiration';
import Calendar from '../testPages/Calendar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({}) => ({
            tabBarStyle: {
                backgroundColor: '#22333B',
            },
            tabBarActiveTintColor: '#7F7F7F',
            tabBarInactiveTintColor: '#FFFFFF',
        })}>
            <Tab.Screen
                  name="SomeComponent" component={SomeComponent} options={{
                    tabBarIcon: ({ color, size }) => {
                      return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          <Icon name={'hanger'} size={size} color={color}/>
                        </View>
                      )
                    }
                  }}/>
                <Tab.Screen
                  name="Outfits" component={Outfits} options={{
                    tabBarIcon: ({ color, size }) => {
                      return (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: -5}}>
                          <Icon name={'tshirt-crew-outline'} size={size} color={color}/>
                        </View>
                      )
                    },
                    tabBarLabelStyle: {
                      top: -5,
                    },
                  }}/>
                <Tab.Screen
                  name="Camera" component={Camera} options={{
                    tabBarIcon: ({ color, size }) => {
                      return (
                        <View style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#A9927D',
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                          top: -20,
                          }}>
                          <Icon name={'camera-outline'} size={size} color={color}/>
                        </View>
                      )
                    },
                    tabBarLabelStyle: {
                      top: -10,
                    },
                  }}/>
                <Tab.Screen
                  name="Inspiration" component={Inspiration} options={{
                    tabBarIcon: ({ color, size }) => {
                      return (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: -5}}>
                          <Icon name={'lightbulb-variant-outline'} size={size} color={color}/>
                        </View>
                      )
                    },
                    tabBarLabelStyle: {
                      top: -5,
                    },
                  }}/>
                <Tab.Screen
                  name="Calendar" component={Calendar} options={{
                    tabBarIcon: ({ color, size }) => {
                      return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          <Icon name={'calendar'} size={size} color={color}/>
                        </View>
                      )
                    }
                  }}/>
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;