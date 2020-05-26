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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

import Light from './Classes/Light'
import ScenesView from './Views/ScenesView';
import LightsView from './Views/LightsView';
import Home from './Components/Home';
import LightsComponent from './Components/LightsComponent';
import SceneComponent from './Components/SceneComponent';
import Settings from './Components/Settings';

import { NeuMorph, NeuMorph2, NeuMorph3 } from './Components/NeuMorph';

const bottomShadowLight = '#d4e2ff';
const backgroundLight = '#f8fbff';

const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";
const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  render() {

    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if(route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Lights') {
                iconName = focused ? 'lightbulb-o' : 'lightbulb-o';
              } else if (route.name === 'Scenes') {
                iconName = focused ? 'circle-o' : 'circle-o';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'gear' : 'gear';
              }
              return <Icon name={iconName} size={30} color={color}/>
            }
          })}
          tabBarOptions={{
            style: {
              shadowOffset: {
                height: 3,
                width: 3,
              },
              shadowOpacity: 1,
              shadowRadius: 2,
              shadowColor: 'black',
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Lights" component={LightsComponent} />
          <Tab.Screen name="Scenes" component={SceneComponent} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        <View style={styles.navView}>
        </View>
      </NavigationContainer>
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
  navView: {
    height: 110,
    position: 'absolute'
    
  },
});