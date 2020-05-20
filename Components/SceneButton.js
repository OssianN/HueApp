import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const backgroundLight = '#f8fbff';
const topShadowLight = '#ffffff'
const bottomShadowLight = '#d4e2ff';

export default class SceneButton extends React.Component {
    render() {
      return (
        <View style={styles.sceneView}>
          <NeuMorph4 flex={1}>
            <TouchableOpacity>
            </TouchableOpacity>
          </NeuMorph4>
          <Text style={styles.sceneTitle}>
            Scene
          </Text>
        </View>
      )
    }
  }

const NeuMorph4 = ({children}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View style={styles.inner4}>
            {children}
          </View>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
  inner4: {
    backgroundColor: backgroundLight,
    justifyContent: 'center',
    color: 'blue',
    height: 60,
    width: 60,
    borderRadius: 50,
  },
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