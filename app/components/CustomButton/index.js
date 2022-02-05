import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Label from '../Label'

export default function index({label,style,onPress,labelStyle,iconProps, labelAddationProps}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,style]}>
             {iconProps&&<View style={{paddingHorizontal:scale(5), justifyContent:'center', alignItems:'center'}}>
                <MaterialIcons   color="#fff" {...iconProps} /> 
             </View>}
             <Label text={`${label}` } style={[styles.label,labelStyle]} {...labelAddationProps}  />
             
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(45),
        backgroundColor:appColors.primary,
        borderRadius:scale(10),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10),
        flexDirection:'row'

    },
    label:{
        fontSize:scale(16), 
        color:appColors.white
    }
})
