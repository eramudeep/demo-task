import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Label from './Label';
import {appColors} from '../utils/appColors';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

export default function PopularHotles() {
  const hotels = [
    {
      name: 'Heven Hotel',
      plce: 'Venice',
      img: require('../assets/imgs/popular/img-2.png'),
    },
    {
      name: 'Para Hotel',
      plce: 'Venice',
      img: require('../assets/imgs/popular/img-1.png'),
    },

    {
      name: 'Heven Hotel',
      plce: 'Venice',
      img: require('../assets/imgs/popular/img-2.png'),
    },
    {
      name: 'Para Hotel',
      plce: 'Venice',
      img: require('../assets/imgs/popular/img-1.png'),
    },
  ];
  const Card = ({item}) => {
    const {name, plce, img} = item;
    return (
      <View>
        <ImageBackground resizeMode="contain" source={img} style={styles.img}>
          <View style={styles.content}>
            <Label
              text={name}
              style={{fontSize: scale(16), color: appColors.white}}
            />
            <View style={styles.locationWrap}>
              <MaterialIcons
                name="place"
                color={appColors.white}
                size={scale(16)}
              />
              <Label text={plce} style={styles.placeLabel} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={{paddingVertical: scale(10)}}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hotels}
        renderItem={({item, index}) => <Card item={item} key={index} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: scale(154),
    height: scale(240),
    borderRadius: scale(20),
    justifyContent: 'flex-end',
  },
  content: {
    paddingBottom: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeLabel: {
    paddingLeft: scale(7),
    fontSize: scale(14),
    color: appColors.white,
  },
});
