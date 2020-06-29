import React from 'react';
import SceneButton from '../Components/SceneButton';
import {NeuMorph, NeuMorph2, NeuMorph3} from '../Components/NeuMorph';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Slider from "azir-slider";
import { LinearTextGradient } from "react-native-text-gradient";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import normalize from 'react-native-normalize';
import { LinearGradient } from 'expo-linear-gradient';


const backgroundLight = '#f8fbff';
const topShadowLight = '#ffffff'
const bottomShadowLight = '#d4e2ff';

const username = "EGKL4PklIflKjqvqNJZOs7FlyM26b71kIQexvODh";
var timestamp = Date.now()

export default class ScenesView extends React.Component {
  constructor(props) {
    super(props) 
  }
  onSceneChange(index){
    this.props.onSceneChange(index)
  }
  
    render() {
      var sceneitems = []
      for(let i = 0; i < this.props.scenes.length; i++){
        sceneitems.push(<SceneButton onPress={(index) => this.onSceneChange(index)} index={i}></SceneButton>
        )
      }
        return (
          <View>
        <NeuMorph2>
            <LinearGradient colors={['#fafaff', '#f5f5ff']} style={styles.linear}>

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
            {sceneitems}
            </View>
            
            <View style={styles.sceneSlider}>
                <View>
                    <NeuMorph3>
                        <Slider
                        progressTrackColor={'#0044ff'}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        />
                    </NeuMorph3>
                </View>

                <NeuMorph>
                    <TouchableOpacity>
                        <View style={styles.colorPick}>
                        </View>
                    </TouchableOpacity> 
                </NeuMorph>
            </View>
            
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
      color: '#0044ff',
    },
    topScene: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      marginRight: 15,
    },
    linear: {
        borderRadius: 20
      },
    sceneList: {
      justifyContent: "center",
      flexWrap: 'wrap',    
      flexDirection: "row",
    },
    track: {
        width: normalize(265),
        height: 20,
        backgroundColor: backgroundLight,
        borderRadius: 20,
        elevation: 3,
    },
    thumb: {
      marginLeft: -3,
      marginRight: -3,
      height: 25,
      width: 25,
      backgroundColor: '#0044ff',
      elevation: 4,
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
    sceneSlider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 15,
      marginBottom: 20,
    },
  });