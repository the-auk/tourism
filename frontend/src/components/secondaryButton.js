import {Text, Pressable, StyleSheet} from "react-native";
import {h3} from '../styles/Typography';
import { primary } from "../styles/Colors";
import { horizontalScale, verticalScale, moderateScale } from "../styles/Metric";

export default function SecondaryButton(props){
    return(        
    <Pressable onPress={props.onPress} style={({ pressed }) => {
        return [pressed ? { ...styles.secondaryButton, marginTop:props.mT, marginBottom:props.mB, opacity: 0.5 } : { ...styles.secondaryButton, marginTop:props.mT, marginBottom:props.mB, opacity: 1 }];
      }}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
      )
};

const styles = StyleSheet.create({
    secondaryButton:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(16),
        borderColor: primary.mB,
        borderWidth: 0.75,
        height: verticalScale(45),
        backgroundColor: primary.mB
    },
    buttonText:{
        fontFamily: h3.font,
        fontWeight: h3.weight,
        fontSize: h3.size,
        color: primary.wS,
    }
})