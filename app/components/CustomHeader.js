import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Label from './Label';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {scale} from 'react-native-size-matters';
import {appColors, shadow} from '../utils/appColors';
export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <Label
        text={'Ram Singh'}
        bold
        style={{fontSize: scale(24), lineHeight: 40}}
      />
      <Pressable style={styles.searchBtn}>
        <MaterialIcons name="search" size={scale(20)} color={appColors.gray} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBtn: {
    ...shadow,
    backgroundColor: appColors.white,
    padding: scale(10),
    borderRadius: scale(20),
    //paddingVertical:scale(10)
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
