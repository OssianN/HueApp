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
import Scene from '../Classes/Scene'
import ScenesView from '../Views/ScenesView';
import LightsView from '../Views/LightsView';

const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";


/* hårdprogrammera lamporna.. ska synca med bridge */
var lights = [new Light("LightStips", 1, 10, 10, true, 50),
  new Light("Globe", 2, 40, 890, true, 90),
  new Light("Window", 3, 160, 9000, true, 200),
  new Light("Bedside", 4, 255, 26044, true, 255)
]

var scenes = [new Scene([new Light("LightStips", 1, 10, 10, true, 50),
  new Light("Globe", 2, 40, 200, true, 90),
  new Light("Window", 3, 160, 9000, true, 200),
  new Light("Bedside", 4, 255, 26044, true, 255)], "scene1"),
  new Scene([new Light("LightStips", 1, 10, 10, true, 50),
  new Light("Globe", 2, 40, 300, true, 90),
  new Light("Window", 3, 160, 300, true, 200),
  new Light("Bedside", 4, 255, 300, true, 255)], "scene2"),
  new Scene([new Light("LightStips", 1, 10, 10, true, 50),
  new Light("Globe", 2, 255, 26044, true, 90),
  new Light("Window", 3, 255, 26044, true, 200),
  new Light("Bedside", 4, 255, 26044, true, 255)], "scene3")
]
var timestamp = Date.now()


export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state={username:username, lights:lights, scenes:scenes}
      }
      
      onBrightnesChange(value, light){
        var newLights = this.state.lights
        newLights[light.index - 1].bri = value
        this.setState({
          lights: newLights
        })
        this.state.lights[light.index - 1].changeBrightness("10.0.1.2", username)
      }

      onSceneChange(index){
        this.state.scenes[index].setAsScene("10.0.1.2", username)
        this.setState({
          lights: this.state.scenes[index].lights
        })
      }
    
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

                        <ScenesView onSceneChange={(index) => this.onSceneChange(index)} scenes={this.state.scenes}></ScenesView>
                        <View margin={15}></View>   
                        <LightsView onBrightnesChange={(value, light) => this.onBrightnesChange(value, light)} lights={this.state.lights}></LightsView>

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
    marginBottom: 15,
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: '200',
    color: '#0044ff',
    },
  });