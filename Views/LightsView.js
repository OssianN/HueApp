import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import normalize from 'react-native-normalize';
import { LinearGradient } from 'expo-linear-gradient';


import {NeuMorph, NeuMorph2, NeuMorph3, NeuMorph4} from '../Components/NeuMorph';

const backgroundLight = '#f8fbff';
const topShadowLight = '#ffffff'
const bottomShadowLight = '#d4e2ff';

const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";
var timestamp = Date.now()


export default class LightsView extends React.Component {
  constructor(props) {
    super(props) 
  }

  onBrightnesChange(value, light){
    this.props.onBrightnesChange(value, light)
  }

  render() {
    const items = []

    for(let i = 0; i < this.props.lights.length; i++){

    items.push(
      <View>
        <View flexDirection={'column'}>
          <Text style={styles.lightName}>
            {this.props.lights[i].name}
          </Text>
        </View>
        <View flexDirection={'row'} alignItems={'center'} marginBottom={30}>
          <NeuMorph3>
                <Slider
                value={0}
                step={1}
                minimumValue={0}
                maximumValue={255}
                onChange={value => 
                  this.onBrightnesChange(value, this.props.lights[i])
                }
                marginLeft={15}
                progressTrackColor={'#0044ff'}
                trackStyle={styles.track}
                thumbStyle={styles.thumb}
                />
          </NeuMorph3>
          <NeuMorph>
            <TouchableOpacity>
            <View style={styles.colorPick}>
            </View>
            </TouchableOpacity> 
          </NeuMorph>
        </View>
    </View>
    )
  }

    return (
      <View>
        <NeuMorph2>
          <LinearGradient colors={['#fafaff', '#f5f5ff']} style={styles.linear}>
              <View style={styles.topLights}>
                <Text style={styles.fixToText}>
                  Lights
                </Text>
              </View>
              {items}
          </LinearGradient>
        </NeuMorph2>
        <Text></Text>
      </View>
    )
  }
 }


const styles = StyleSheet.create({
  colorPick: {
    width: 17,
    height: 17,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
  },
  fixToText: {
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#0044ff',
  },
  lightName: {
    flex: 1,
    marginLeft: 15,
    color: 'blue',
  },
  linear: {
    borderRadius: 20
  },
  topLights: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  track: {
    width: normalize(265),
    height: 20,
    backgroundColor: backgroundLight,
    borderRadius: 20,
    elevation: 2,

  },
  thumb: {
    marginLeft: -3,
    height: 25,
    width: 25,
    backgroundColor: backgroundLight,
    elevation: 4,
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 3,
      shadowColor: bottomShadowLight,
  },
});