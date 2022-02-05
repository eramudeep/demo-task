import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {scale} from 'react-native-size-matters';
import Label from '../../components/Label';
import * as Animatable from 'react-native-animatable';
import {appColors,shadow} from '../../utils/appColors';
export default function index({navigation}) {
  const slides = [
    {
      key: 'two',
      title: 'Demo Task By Ram',
      text:
        '\nThere’s something for everyone. We have expert English teachers that will help you to grow. Our exercises are tailored to help users learn new words and vocabulary effectively.',
      image: require("../../assets/imgs/img-1.png") ,
      backgroundColor: '#febe29',
       
    },
    {
      key: 'three',
      title: 'Achieve',
      text:
        '\nThis easy-to-use app lets you practice English in a simpler and effective way. You will learn something new everyday that will give you confidence and a positive attitude.',
        image: require("../../assets/imgs/img-1.png") ,
      backgroundColor: '#22bcb5',
       
    },
    {
      key: 'one',
      title: 'Login',
      text:
        '\nWith the easy login process, get the best environment to enhance your English language writing skill. Prepare with confidence for your upcoming IELTS or other exams.',
        image: require("../../assets/imgs/img-1.png") ,
      backgroundColor: '#59b2ab',
       
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Animatable.View animation={'bounceIn'} style={{ height: scale(420),...shadow,alignItems: 'center',  backgroundColor:appColors.white ,borderRadius:scale(30)}}>
          <Image
          resizeMode='contain'
            style={{ backgroundColor:appColors.white , height: scale(420), width:'80%', borderRadius:scale(30)}}
            source={  item.image }
          />
        </Animatable.View>
        <View style={{paddingHorizontal: scale(20),   flex:1}}> 
          <Label text={item.text} style={{fontSize: scale(13)}} />
        </View>
      </View>
    );
  };
  const _onDone = () => {
    navigation?.navigate("Login")
  };
  return (
    <AppIntroSlider
      dotStyle={styles.buttonCircle}
      activeDotStyle={styles.activeButton}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      showSkipButton
      renderSkipButton={() => <Label text={'Skip'} style={styles.btn} />}
      renderNextButton={() => <Label text={'Next'} style={styles.btn} />}
      renderDoneButton={() => <Label text={'Done'} style={styles.btn} />}
      // skipLabel={"Slip"}
    />
  );
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(3),
    backgroundColor: appColors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: scale(18),
    height: scale(8),
    backgroundColor: appColors.primary,
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:scale(30),
    paddingVertical:scale( 40),
    //   backgroundColor:"red"
    //   paddingHorizontal:scale(20)
  },
  btn: {
    marginTop: scale(10),
    fontSize: scale(15),
  },
});
