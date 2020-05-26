import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LinearGradient } from 'expo-linear-gradient';

import {NeuMorph, NeuMorph2, NeuMorph3, NeuMorph4} from '../Components/NeuMorph';


const backgroundLight = '#f8fbff';
const topShadowLight = '#ffffff'
const bottomShadowLight = '#d4e2ff';

export default class SceneButton extends React.Component {
    render() {
      return (
        <View style={styles.sceneView}>
          <NeuMorph4>
            <TouchableOpacity style={styles.sceneButton}>
              <LinearGradient start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.2}} colors={['#0044ff', '#fafaff88']} style={styles.colorPick}>
              </LinearGradient>
            </TouchableOpacity>
          </NeuMorph4>
          <Text style={styles.sceneTitle}>
            Scenex
          </Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
  sceneView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sceneTitle: {
    color: '#0044ff', 
    borderWidth: 8, 
    borderColor: 'transparent',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  sceneButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  colorPick: {
    width: 44,
    height: 44,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  innerButton: {
    width: 30
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
})