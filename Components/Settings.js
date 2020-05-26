import 'react-native-gesture-handler';
import * as React from 'react';
import { State, ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Button, MaskedViewIOS, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import normalize from 'react-native-normalize';

import Light from '../Classes/Light'
import ScenesView from '../Views/ScenesView';
import LightsView from '../Views/LightsView';

const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";


export default class Settings extends React.Component {

    render() {
        return(
            <LinearGradient colors={['white', '#eeefff']} style={styles.linear}>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={styles.allContent}>

                        <View
                        style={styles.title}>
                        <Text style={styles.title}>hellue</Text>
                        </View>
                        
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
  
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      
    },
    allContent: {  
      alignItems: 'center',
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
    },
    linear: {
      flex: 1,
    },
  title: {
    marginTop: 5,
    marginBottom: 20,
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: '200',
    color: '#0044ff',
    },
  });