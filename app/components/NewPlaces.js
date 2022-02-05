import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

export default function NewPlaces() {

   
  const Card = () => {
    return (
      <View>
        <Image
            resizeMode='contain'
          source={require('../assets/imgs/new-places/img-1.png')}
          style={{
            width: scale(280),
            height: scale(160),
            borderRadius: scale(20),
          }}
        />
      </View>
    );
  };
  return (
    <View style={{paddingVertical: scale(10)}}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{padding: scale(7)}} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4]}
        renderItem={({item, index}) => <Card key={index} />}
      />
    </View>
  );
}
