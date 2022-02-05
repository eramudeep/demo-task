import { View, Text,Pressable,StyleSheet } from 'react-native';
import React ,{useState}from 'react';
import Container from '../../components/Container';
import Label from '../../components/Label';
import GuestContainer from '../../components/Container/GuestContainer';
import { scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { AlertHelper } from '../../utils/AlertHelper';


export default function RecoverPass({navigation}) {

    const [formData, setFormData] = useState({});

    const fileds = [
        {
            name:"Email",
            placeholder:"Email"
        } 
    ]  
    const onChangeText =(name,change)=>{
      setFormData({...formData, [name]:change  })
    }
    const onAlreadyHaveAccount = ()=>{
      navigation?.navigate("Login")
    }

const onSend = ()=>{
    console.log( );
     if(Object.keys(formData).length < fileds?.length ){
         //error
         AlertHelper.show("error","All fields are required")
     }else{
        AlertHelper.show("success","New Password sent to your email")
        navigation?.navigate("Login")
     }
    
}
  return (
    <GuestContainer>
 
        <Label  text={"Recover password"}  style={{fontSize:scale(30), paddingVertical:scale(30)}} bold />
        
        {
            fileds?.map((field,key)=>{
                const {name,placeholder}=field
                return <CustomInput onChangeText={(change)=> onChangeText(name,change) } placeholder={placeholder} />
            })
        }  
        <CustomButton onPress={onSend} label={"Send"} labelAddationProps={{bold:true}} style={{width:"100%"}}  />
        <Pressable onPress={onAlreadyHaveAccount} style={ styles.center }>
            <Label text={"Already Have an account ?"} />
        </Pressable>
         
    </GuestContainer>
  );
}


const styles = StyleSheet.create({
    center:{
        paddingVertical:scale(10), justifyContent:'center', alignItems:'center'
    }
    
    })