import React from 'react';
import SceneButton from '../Components/SceneButton';
import {NeuMorph, NeuMorph2, NeuMorph3} from '../Components/NeuMorph';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const backgroundLight = '#f8fbff';
const topShadowLight = '#ffffff'
const bottomShadowLight = '#d4e2ff';

const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";
var timestamp = Date.now()

export default class ScenesView extends React.Component {
    render() {
        return (
        <NeuMorph2>
            <View style={styles.topScene}>
                <Text style={styles.fixToText}>
                Scenes
                </Text>
            <NeuMorph>
                <TouchableOpacity>
                <Text style={{color: '#0044ff'}}>
                    +
                </Text>
                </TouchableOpacity> 
            </NeuMorph>
            </View>

            <View style={styles.sceneList}>
            <SceneButton></SceneButton>
            <SceneButton></SceneButton>
            <SceneButton></SceneButton>
            <SceneButton></SceneButton>
            
            </View>
            
            <View style={styles.sceneSlider}>
                <View flexDirection={'row'} flex={9}>
                    <NeuMorph3>
                        <Slider
                        progressTrackColor={'#0044ff'}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        />
                    </NeuMorph3>
                </View>

            <NeuMorph >
                <View flexDirection={'row'} flex={1}>
                <TouchableOpacity>
                <View 
                    width={20} 
                    height={20} 
                    backgroundColor={'blue'} 
                    borderRadius={20} 
                    alignItems={'center'}
                    >
                    </View>
                </TouchableOpacity> 
                </View>
            </NeuMorph>
            </View>

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
        flexDirection: 'row',
      height: 20,
      width: 260,
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
        flexDirection: 'row',
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
      flexDirection: 'row',
     
    },
    inner3: {
        flexDirection: 'row',
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