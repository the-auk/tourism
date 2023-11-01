import { View, Text, StyleSheet, Pressable } from 'react-native';
import {verticalScale, moderateScale, horizontalScale } from "../styles/Metric";
import { h4 } from "../styles/Typography";
import { primary, grays } from "../styles/Colors.js";
import { backArrow } from '../styles/icons';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.openPostHeader}>
             {!props.back && <Pressable
                style={styles.backArrow}
                onPress={() => navigation.goBack()}
              >
                <View style={styles.cont}>
                    {backArrow(20, primary.wS)}
                </View>
              </Pressable>}
              <Text style={styles.headerText}>{props.text ? props.text : ""}</Text>
            </View>

    )
}
const styles = StyleSheet.create({
    openPostHeader: {
        paddingTop: verticalScale(53),
        flexDirection: "row",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        height: verticalScale(97),
        // borderBottomColor:grays.fW,
        // borderBottomWidth:verticalScale(0.75)
        // backgroundColor: primary.wS,
      },
      backArrow: {
        height: moderateScale(44),
        width: moderateScale(44),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: horizontalScale(10),
        top: verticalScale(53),
        zIndex: 99,
      },
      headerText: {
        fontFamily: h4.family,
        fontSize: h4.size,
        fontWeight: h4.weight,
        color: grays.cB,
      },
      cont: {
        width: horizontalScale(30),
        height: verticalScale(30),
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      }
})
export default Header;