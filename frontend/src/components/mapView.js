import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, ScrollView } from 'react-native';
import { verticalScale } from '../styles/Metric';

const MapViewCustom = () => {
  return (
    <ScrollView style={styles.container}>
      <MapView style={styles.map} initialRegion={{
    latitude: 31.1048,
    longitude: 77.1734,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: verticalScale(300),
    borderRadius: 30
  },
});
export default MapViewCustom;