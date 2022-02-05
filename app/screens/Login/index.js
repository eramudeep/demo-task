import { View, Text,Pressable ,StyleSheet} from 'react-native';
import React,{useState} from 'react';
import Container from '../../components/Container';
import Label from '../../components/Label';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { scale } from 'react-native-size-matters';
import ReduxWrapper from '../../redux/ReduxWrapper';
import GuestContainer from '../../components/Container/GuestContainer';
import { AlertHelper } from '../../utils/AlertHelper';
import {displayName} from '../../../app.json';
import { randomeString } from '../../utils/common';
;

function index({navigation, setLogin$}) {
    const [formData, setFormData] = useState({});

  const fileds = [
      {
          name:"Email",
          placeholder:"Email",
          keyboardType:"email-address" 

      },
      {
        name:"Password",
        placeholder:"Password",
        secureTextEntry:true
    }
  ]  
  const onChangeText =(name,change)=>{
    setFormData({...formData, [name]:change  })
  }
  const onForgetPassword = ()=>{
    navigation?.navigate("RecoverPass")
  }


const onSend = ()=>{
    console.log( );
     if(Object.keys(formData).length < fileds?.length ){ 
         AlertHelper.show("error","All fields are required")
     }else{
        setLogin$({
          userInfo: formData,
          token: randomeString(20),
        })
        AlertHelper.show("success",`Login Success !! Welcome to ${displayName}`)
        navigation?.navigate("Home")
     }
    
}

  return (
      <GuestContainer>
 
        <Label  text={"Login"}  style={{fontSize:scale(30)}} bold />
        
        {
            fileds?.map((field,key)=>{
                const {name,placeholder,keyboardType}=field
                return <CustomInput  onChangeText={(change)=> onChangeText(name,change) }  {...field} />
            })
        }  
        <CustomButton onPress={onSend} label={"Login"} labelAddationProps={{bold:true}} style={{width:"100%"}}  />
        <Pressable onPress={onForgetPassword} style={ styles.center }>
            <Label text={"Forget password ?"} />
        </Pressable>
         
    </GuestContainer>
  );
}

const styles = StyleSheet.create({
center:{
    paddingVertical:scale(10), justifyContent:'center', alignItems:'center'
}

})

export default ReduxWrapper(index)