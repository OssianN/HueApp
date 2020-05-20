import * as React from 'react';
import { State, ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Light from './Classes/Light'
import ScenesView from './Views/ScenesView';
import LightsView from './Views/LightsView';


const backgroundLight = '#f8fbff';
const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";
var lights = [new Light("1", 1, 10, 10, true, 50),
  new Light("2", 2, 40, 890, true, 90),
  new Light("3", 3, 160, 9000, true, 200),
  new Light("4", 4, 255, 26044, true, 255)
]
var timestamp = Date.now()

export default class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state={username:username, lights:lights}
  }
  
  onBrightnesChange(value, light){
    var newLights = this.state.lights
    newLights[light.index - 1].bri = value
    this.setState({
      lights: newLights
    })
    console.log()
    this.state.lights[light.index - 1].changeBrightness("10.0.1.2", username)
  }


  render() {


    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.allContent}>
      <View
      style={styles.title}>
        <Text
        style={styles.titleText}
        >hellue</Text>
      </View>

      <ScenesView></ScenesView>
  <View margin={25}></View>      
      <LightsView onBrightnesChange={(value, light) => this.onBrightnesChange(value, light)} lights={this.state.lights}></LightsView>

        </View>
        </ScrollView>
      </SafeAreaView>
  );
  }
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundLight,
    height: '100%',
  },
  allContent: {
    marginHorizontal: 26,
  },
title: {
  marginBottom: 50,
  justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#0044ff',
  },
});