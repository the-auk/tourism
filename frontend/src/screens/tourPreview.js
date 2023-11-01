import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import SecondaryButton from "../components/secondaryButton";
import Header from "../components/header";
import { horizontalScale, verticalScale, fontScale } from "../styles/Metric";
import { primary } from "../styles/Colors";
import { h4, h1, h3, h2 } from "../styles/Typography";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TourPreview = ({route, navigation}) => { 
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Header/>
            </View>
            <View style={styles.imageCont}>
                <Image source={{uri: item.tour_img}} style={{width: '100%', height: '100%'}}/>
                <View style={styles.overLay}></View>
                <Text style={styles.float}>{item.tour_title}</Text>
            </View>
            <ScrollView style={{marginBottom: 100}} showsVerticalScrollIndicator={false}>
            <View style={styles.roundCont}>
                <TouchableOpacity style={styles.roundButton}>
                    <FontAwesome5 name="share" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundButton}>
                    <FontAwesome5 name="map" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundButton}>
                <AntDesign name="staro" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{padding: 20}}>
                <Text style={styles.text}>
                    {item.tour_description}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={styles.price}>5000 ₹  </Text>
                    <Text>for 3 nights.</Text>
                </View>
            </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <SecondaryButton
                onPress={() => {navigation.navigate("bookScreen", {
                    place: "Shimla"
                })}}
                text={"Book Tour"}
                mT={0}
                mb={0}/>
            </View>
        </View>
    )
};
export default TourPreview;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head:  {
        position: 'absolute',

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        paddingHorizontal: 10
    },
    imageCont: {
        width: '100%',
        height: verticalScale(350),
        zIndex: -1
    },
    text:{
        fontFamily:h4.family,
        fontSize:h4.size,
        fontWeight: h4.weight,
        color:primary.rB,
        lineHeight: 30
      },
      roundCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      },
      roundButton: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: primary.mB,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
      },
      float: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontFamily: h1.family,
        fontWeight: h1.weight,
        fontSize: fontScale(40),
        color: primary.wS,
        lineHeight: fontScale(50),
        zIndex: 99,
        paddingLeft: horizontalScale(20),
        paddingBottom: horizontalScale(20)
      },
      overLay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
      },
      price: {
        fontFamily:h2.family,
        fontSize:h2.size,
        fontWeight: h2.weight,
        color:primary.mB,
        lineHeight: 30,
      }
})