import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,  } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label'; 
import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import CustomHeader from '../../components/CustomHeader';
import NewPlaces from '../../components/NewPlaces';
import PopularHotles from '../../components/PopularHotles';

export default function Home() {
 

  const Heading = ({label, labelRight})=>{
    return <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Label text={label } style={{fontSize:scale(18), lineHeight:scale(28)}} /> 
      <Label text={ labelRight} style={{fontSize:scale(12), lineHeight:scale(20), color:appColors.primary}} /> 
    </View>
  }
    return (
        <Container isScrollable  style={styles.container}> 
         <CustomHeader /> 
        <View style={{paddingVertical:scale(20)}}>
          <Heading label="New Place"  labelRight={"See more"}/>
          <NewPlaces />
        </View> 


        <View style={{paddingVertical:scale(10)}}>
          <Heading label="Popurlar Hotel"  labelRight={"See more"}/>
          <PopularHotles />
        </View>


        <View style={{paddingVertical:scale(10)}}>
          <Heading label="Recommend"  labelRight={"See more"}/>
          <PopularHotles />
        </View>

        
      </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    header: {
      backgroundColor: appColors.primary,
      alignItems: 'center',
      borderBottomWidth: 12,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 25,
      padding: 20,
      margin: 20,
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });