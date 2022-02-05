import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import Label from '../Label';
import Container from './index';
import { scale } from 'react-native-size-matters';
 

export default function GuestContainer({children}) {
  return (
    <Container>
      <View style={[styles.center, {alignContent: 'center', flex: 1}]}>
        {children}
      </View>
    </Container>
  );
}



const styles = StyleSheet.create({
    center:{
        paddingVertical:scale(10), justifyContent:'center', alignItems:'center'
    }
    
    })