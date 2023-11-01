import React from 'react';
import FadeCarousel, { Bearing } from 'react-native-fadecarousel';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontScale, verticalScale, moderateScale, horizontalScale } from "../styles/Metric";
import { h1 } from "../styles/Typography";

const ImageSlider = () => {
  const images = [
    {img: require('../../assets/manali.jpg'), text:`Our mission is to connect people with nature`},
    {img: require('../../assets/front.jpg'), text: `Find peace \nin nature`},
    {img: require('../../assets/golden_temple.jpg'), text: `Explore \nNew Places`},
    {img: require('../../assets/taj.jpg'), text: `Find your \nplace to relax`},
  ];
    return (
      <View style={{width: '100%'}}>
        <FadeCarousel 
          loop 
          entranceBearing={Bearing.Center}
          fadeAnimationDuration={1800} 
          autoPlay={{enable: true , delay: 1000 }}
          style={{justifyContent: 'center', alignItems: 'center'}}
            >
            {
              images.map((ele, index) => {
                return (
                  <View style={styles.slideItem} key={index}>
                    <View style={styles.textOverlay}>
                       <Text style={styles.text}>
                         {ele.text}
                       </Text>
                     </View>
                   <View style={styles.overLay}></View>
                   <Image style={{width: '100%', height: '100%', borderRadius: 16}} source={ele.img}/>
                </View>
                )
              })
            }
        </FadeCarousel>
    </View>
    )
}
const styles = StyleSheet.create({
  slideItem: {
    width: horizontalScale(360), 
    height: 360, 
    borderRadius: 20
  },
  overLay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 2,
    borderRadius: 16
  },
  textOverlay: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    zIndex: 3,
    padding: 20,
    borderRadius: 16
  },
  text:{
    fontFamily: h1.family,
    fontWeight: h1.weight,
    fontSize: fontScale(40),
    color: '#d7d7d7',
    zIndex: 99,
},
})
export default ImageSlider;