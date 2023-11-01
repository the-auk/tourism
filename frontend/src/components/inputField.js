import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    InputAccessoryView,
  } from "react-native";
  import { useState, useEffect } from "react";
  import { h5, h6, h11 } from "../styles/Typography";
  import { horizontalScale, verticalScale, moderateScale } from "../styles/Metric";
  import { primary, secondary, grays, other } from "../styles/Colors";
  
  const InputField = (props) => {
    const [isFocused, setIsFocused] = useState();
    const handleBorderColor = () => {
      if(props.hasError) return other.mR
      if(isFocused) return primary.mB
      else return secondary.sG
    }
    return (
      <View>
      <View
        style={{
          ...styles.inputWrapper,
          borderColor: handleBorderColor()
        }}
      >
        <View style={styles.inputIcon}>
          {props.icon}
        </View>
        <TextInput
          style={styles.commentInput}
          placeholder={props.placeholder}
          onChangeText={props.setText}
          value={props.val}
          secureTextEntry={props.isPassword}
          textAlignVertical="center"
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholderTextColor={secondary.sG}
        />
      </View>
      {props.hasError && <Text style={styles.errorMsg}>{props.errorMsg}</Text>}
      </View>
    );
  };
  const styles = StyleSheet.create({
    inputWrapper: {
      flexDirection: "row",
      borderWidth: moderateScale(0.75),
      borderRadius: moderateScale(16),
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      overflow:'hidden',
      paddingHorizontal: horizontalScale(8),
      height:verticalScale(44),
    },
    inputIcon:{
      width:moderateScale(20),
      height:moderateScale(20),
      justifyContent:'center',
      alignItems:'center'
    },
    commentInput: {
      flex: 1,
      fontFamily: h5.family,
      fontSize: h5.size,
      fontWeight: h5.weight,
      color: secondary.rB,
      paddingLeft:horizontalScale(8),
      paddingVertical: verticalScale(8),
    },
    errorMsg: {
      paddingTop: verticalScale(4),
      fontFamily: h11.family,
      fontSize: h11.size,
      fontWeight: h11.weight,
      color: other.mR
    }
  });
  
  export default InputField;