import { View, StyleSheet, Text, ScrollView} from "react-native"
import CustomCarousel from "../components/carousel";
import { useEffect, useState } from "react";
import {getToursList} from '../services/service';
import SearchBar from "../components/searchBar";
import ImageSlider from "../components/imageSlider";
import {
  moderateScale, verticalScale
} from "../styles/Metric";
import {primary, grays} from '../styles/Colors';
import { h1 } from '../styles/Typography';

const Home = () => {
  const [featuredTourList, setFeaturedTourList] = useState([]);
  const [southIndia, setSouthIndia] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchFeaturedList = async () => {
    const featured = await getToursList("Featured");
    setFeaturedTourList(featured);
    const south = await getToursList("south_india");
    setSouthIndia(south);
    const history = await getToursList("history");
    setHistory(history);
  }

  useEffect(() => {
    fetchFeaturedList();
  }, [])
    return (
        <View style={styles.container}>
            <View style={styles.morning}>
              <Text style={{...styles.fText}}>Good Morning</Text>
            </View>
            <SearchBar data={[...featuredTourList, ...history, ...southIndia]}/>
          <ScrollView style={styles.sView} showsVerticalScrollIndicator={false}>
              <ImageSlider/>
            <View style={styles.innerCon}>
              <Text style={styles.fText}>Featured Tours</Text>
            </View>
              <CustomCarousel items={featuredTourList}/>
              <View style={styles.dashCont}>
                <View style={styles.dash}></View>
              </View>
            <View style={styles.innerCon}>
              <Text style={styles.fText}>Visit South India</Text>
            </View>
              <CustomCarousel items={southIndia}/>
              <View style={styles.dashCont}>
                <View style={styles.dash}></View>
              </View>
            <View style={styles.innerCon}>
              <Text style={styles.fText}>Historical Tours</Text>
            </View>
              <CustomCarousel items={history}/>
              <View style={styles.dashCont}>
                <View style={styles.dash}></View>
              </View>
              <View style={styles.innerCon}>
              <Text style={styles.fText}>Wildlife and Nature Tours</Text>
            </View>
              <CustomCarousel items={featuredTourList}/>
          </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingTop: verticalScale(40),
    },
    innerCon: {
      justifyContent: 'flex-start',
      width: '100%',
      padding: 20,
    },
    fText: {
      fontFamily: h1.family,
      fontSize: h1.size,
      fontWeight: h1.weight,
      lineHeight: h1.size,
      color: primary.mB,
    },
    morning: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: moderateScale(10),
      marginTop: moderateScale(30),
      marginBottom: moderateScale(20),
      paddingHorizontal: moderateScale(20)
    },
    sView: {
      width: '100%', 
      height: '100%',
      zIndex: -9
    },
    dash: {
      borderTopWidth: moderateScale(0.75),
      borderColor: grays.fW,
      width: "100%",
    },
    dashCont: {
      paddingHorizontal: 20, 
      justifyContent: 'center',
      alignItems: 'center', 
      marginVertical: 10
    }
  });
export default Home;