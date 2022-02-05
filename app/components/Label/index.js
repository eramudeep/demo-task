import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Label({text,style,bold,boldExtra,boldSemi,medium}) {
    return (
    <Text style={[styles.label,bold&&styles.bold, boldExtra&& styles.boldExtra, medium && styles.medium, boldSemi&& styles.boldSemi ,style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:scale(14),
        color:appColors.black,
        fontFamily:'Heebo-Regular'
    },
    bold:{
        fontFamily:'Heebo-Bold'
    },
    boldSemi:{
        fontFamily:'Heebo-SemiBold'
    },
    boldExtra:{
        fontFamily:'Heebo-ExtraBold'
    },
    medium:{
        fontFamily:'Heebo-Medium'
    }
})
