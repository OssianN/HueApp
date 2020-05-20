import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {NeuMorph, NeuMorph2, NeuMorph3} from '../Components/NeuMorph';

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
    console.log(this.props.lights)
    for(let i = 0; i < this.props.lights.length; i++){

      items.push(<View>
        <View flexDirection={'row'} alignItems={'center'}>
          <NeuMorph3>
                <Slider
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
          <Text>
            {this.props.lights[i].name}
            </Text>
          <NeuMorph>
            <TouchableOpacity>
            <View style={styles.colorPick}>
            </View>
            </TouchableOpacity> 
          </NeuMorph>
        </View>
      </View>)
    }

    return (
    <NeuMorph2>
          <View style={styles.topLights}>
            <Text style={styles.fixToText}>
              Lights
            </Text>
          </View>
          {items}
      </NeuMorph2>
    )
  }
 }


const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundLight,
    height: '100%',
    overflow: 'scroll',
  },
  allContent: {
    marginHorizontal: 30,
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
  colorPick: {
    width: 20,
    height: 20,
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
  topScene: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  sceneList: {
    justifyContent: "center",
    flexWrap: 'wrap',    
    flexDirection: "row",
  },
  topLights: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 10,
  },
  track: {
    width: 265,
    height: 20,
    backgroundColor: backgroundLight,
    borderRadius: 20,
  },
  thumb: {
    marginLeft: -3,
    marginRight: -3,
    height: 25,
    width: 25,
    backgroundColor: '#0044ff',
      shadowOffset: {
        width: -3,
        height: -3,
      },
      shadowOpacity: 1,
      shadowRadius: 3,
      shadowColor: topShadowLight,

      shadowOffset: {
        width: 4,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 3,
      shadowColor: bottomShadowLight,
  },
  inner: {
    justifyContent: 'center',
    textAlign: 'right',
    alignItems: 'center',
    color: 'blue',
    height: 25,
    width: 25,
    borderRadius: 20,
    margin: 15,
  },
  inner2: {
    backgroundColor: backgroundLight,
    justifyContent: 'center',
    borderColor: backgroundLight,
    borderRadius: 20,
  },
  inner3: {
    marginTop: 10,
    marginBottom: 10,
  },
  sceneSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  topShadow: {
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: topShadowLight,
  },
  bottomShadow: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: bottomShadowLight,
  },
});