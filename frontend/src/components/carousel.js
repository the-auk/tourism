import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import welc from '../../assets/welc.jpg';
import { horizontalScale, verticalScale } from '../styles/Metric';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';

const CustomCarousel = (props) => {
  const [ref, setRef] = useState();
  const navigation = useNavigation();

  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity style={styles.carouselItem} onPress={() => {
        navigation.navigate("tourPreview", {
          item: item
        });
      }}>
        <Image source={{uri: item.tour_img}} style={styles.image} />
        <Text style={styles.trailName}>{item.tour_title}</Text>
        <Text style={styles.description}>{(item.tour_description).slice(0, 100)+"..."}</Text>
      </TouchableOpacity>
    );
  };

  return (
      <Carousel
        data={props.items}
        renderItem={renderItem}
        sliderWidth={horizontalScale(400)}
        itemWidth={horizontalScale(300)}
        firstItem={1}
      />

  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: '100%',
    height: 'auto',
  },
  image: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: 16,
  },
  trailName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    marginTop: 5,
    color: '#777',
  },
});

export default CustomCarousel;
