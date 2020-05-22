import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import normalize from 'react-native-normalize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}