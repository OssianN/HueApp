import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const backgroundLight = '#f8fbff';
const topShadowLight = '#ffffff'
const bottomShadowLight = '#d4e2ff';

export const NeuMorph = ({children, size, style}) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={styles.inner}>
        {children}
        </View>
      </View>
    </View>
  )
}

export const NeuMorph2 = ({children, size, style}) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={styles.inner2}>
          {children}
        </View>
      </View>
    </View>
  )
}

export const NeuMorph3 = ({children}) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={styles.inner3}>
          {children}
        </View>
      </View>
    </View>
  )
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