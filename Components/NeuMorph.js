import React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import normalize from 'react-native-normalize';
import { TouchableHighlight } from "react-native";

import { BoxShadow } from "react-native-shadow";

    const shadowOpt = {
      width: 200,
      height: 200,
      color: "#000",
      border: 2,
      radius: 20,
      opacity: 0.2,
      x: 0,
      y: 2,
      style: { marginVertical: 5 }
    };

    <BoxShadow setting={shadowOpt}></BoxShadow>

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

export const NeuMorph4 = ({children}) => {
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
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: 20,
    marginLeft: 5,
    backgroundColor: backgroundLight,
    elevation: 3,
    },
  inner2: {
    backgroundColor: backgroundLight,
    justifyContent: 'center',
    borderRadius: 20,
    width: normalize(320),
    elevation: 3,
  },
  inner3: {
    marginTop: 10,
    marginBottom: 10,
    flex: 9,
    elevation: 3,
  },
  inner4: {
    backgroundColor: backgroundLight,
    justifyContent: 'center',
    color: 'blue',
    height: 60,
    width: 60,
    borderRadius: 50,
    elevation: 3,
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
    shadowRadius: 4,
    shadowColor: topShadowLight,
  },
  bottomShadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: bottomShadowLight,
  },
});