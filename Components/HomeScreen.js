import * as React from 'react';
import { State, ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import { StyleSheet, Button, MaskedViewIOS, View, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';

import Slider from "azir-slider";
import { LinearGradient } from 'expo-linear-gradient';
import normalize from 'react-native-normalize';

import Light from '../Classes/Light'
import ScenesView from '../Views/ScenesView';
import LightsView from '../Views/LightsView';
import NavBar from './NavBar';


export default class HomeScreen extends React.Component {
    render() {
        return (
        <View>
            <ScenesView></ScenesView>
            <View margin={25}></View>   
            <LightsView onBrightnesChange={(value, light) => this.onBrightnesChange(value, light)} lights={this.state.lights}></LightsView>
            <NavBar></NavBar>
        </View>
        );
    }
}