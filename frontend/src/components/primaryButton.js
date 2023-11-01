import {Text, Pressable, StyleSheet} from "react-native";
import {h3} from '../styles/Typography';
import { primary } from "../styles/Colors";
import { horizontalScale, verticalScale, moderateScale } from "../styles/Metric";

export default function PrimaryButton(props){
    return(        
    <Pressable style={({ pressed }) => {
        return [pressed ? { ...styles.primaryButton, marginTop:props.mT, marginBottom:props.mB, opacity: 0.5 } : { ...styles.primaryButton, marginTop:props.mT, marginBottom:props.mB, opacity: 1 }];
      }} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
      )
};

const styles = StyleSheet.create({
    primaryButton:{
        width: horizontalScale(350),
        height: verticalScale(45),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(16),
        borderColor: primary.mB,
        borderWidth: 0.75
    },
    buttonText:{
        fontFamily: h3.font,
        fontWeight: h3.weight,
        fontSize: h3.size,
        color: primary.rB,
    }
})