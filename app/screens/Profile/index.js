import { View, Text } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import ReduxWrapper from '../../redux/ReduxWrapper';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import { scale } from 'react-native-size-matters';
 function index({ navigation, logoutUser$, auth:{userInfo}}) {
  const onLogout = ()=>{
    logoutUser$()
    navigation?.navigate("OnBoarding") 
  }
    return (
    <Container>
      <View style={{paddingVertical:scale(30) }}>
        <Label text={"You are logged in with" } /> 
        <Label text={userInfo?.Email } /> 
        <CustomButton onPress={onLogout} label={"Logout"} />
      </View>
    </Container>
  );
}

export default ReduxWrapper(index)