import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Pressable,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { primary } from "../styles/Colors.js";
  import {
    horizontalScale,
    verticalScale,
    moderateScale,
    width,
    height,
    fontScale,
  } from "../styles/Metric";
  import PrimaryButton from "../components/primaryButton";
  import SecondaryButton from "../components/secondaryButton";
  import { h1, h9, h3 } from "../styles/Typography";
  import introimg from "../../assets/welc.jpg";
  import jptlogo from "../../assets/favicon.png";
  import { LinearGradient } from "expo-linear-gradient";
  
  const WelcomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ImageBackground
            style={styles.introImage}
            resizeMode="cover"
            source={introimg}
          >
            <View style={styles.logoWrapper}>
              <Text style={styles.bains}>Bains Tourism</Text>
            </View>
            <Text style={styles.introHeading}>
              Explore {"\n"}Beautiful {"\n"}Places
            </Text>
            <View style={styles.imageOverlay}></View>
            <LinearGradient
              locations={[0.8, 1]}
              colors={["transparent", primary.wS]}
              style={styles.gradientOverlay}
            ></LinearGradient>
          </ImageBackground>
        </View>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            onPress={() => {
              navigation.navigate("login");
            }}
            text="Log In"
            mT={40}
            mB={24}
          ></PrimaryButton>
          <SecondaryButton
            onPress={() => {
              navigation.navigate("signUp");
            }}
            text="Sign Up"
            mT={0}
            mB={58}
          ></SecondaryButton>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.conditionText}>
              By continuing, you agree to our
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={({ pressed }) => {
                  return [pressed ? { opacity: 0.5 } : { opacity: 1 }];
                }}
                onPress={() => {}}
              >
                <Text
                  style={{
                    ...styles.conditionText,
                    textDecorationLine: "underline",
                    textDecorationColor: "black",
                  }}
                >
                  Terms & Conditions{" "}
                </Text>
              </Pressable>
              <Text style={styles.conditionText}> and </Text>
              <Pressable
                style={({ pressed }) => {
                  return [pressed ? { opacity: 0.5 } : { opacity: 1 }];
                }}
                onPress={() => {}}
              >
                <Text
                  style={{
                    ...styles.conditionText,
                    textDecorationLine: "underline",
                    textDecorationColor: "black",
                  }}
                >
                  {" "}
                  Privacy Policy
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      height: verticalScale(844),
      width: horizontalScale(390),
      backgroundColor: primary.wS,
    },
    topContainer: {
      height: verticalScale(570),
      width: "100%",
      position: "relative",
    },
    bains:{
        fontFamily: h1.family,
        fontWeight: h1.weight,
        fontSize: fontScale(40),
        color: primary.wS,
        lineHeight: fontScale(50),
        zIndex: 99,
    },
    introImage: {
      width: horizontalScale(390),
      height: "110%",
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "space-between",
      position: "relative",
    },
    logoWrapper: {
      paddingLeft: horizontalScale(20),
      paddingTop: verticalScale(75),
      position: "relative",
      zIndex: 9,
    },
    jptlogo: {
      width: moderateScale(140),
      height: moderateScale(45.22),
    },
    introHeading: {
      fontFamily: h1.family,
      fontWeight: h1.weight,
      fontSize: fontScale(40),
      color: primary.wS,
      lineHeight: fontScale(50),
      zIndex: 99,
      paddingTop: 50,
      paddingBottom: verticalScale(100),
      paddingLeft: horizontalScale(20),
    },
    gradientOverlay: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 1,
      left: 0,
      bottom: verticalScale(-20),
    },
    test: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 9,
    },
    imageOverlay: {
      backgroundColor: "rgba(0,0,0,0.25)",
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
    },
    bottomContainer: {
      flex: 1,
      paddingHorizontal: horizontalScale(20),
      paddingBottom: verticalScale(49),
      borderTopLeftRadius: moderateScale(16),
      borderTopRightRadius: moderateScale(16),
      backgroundColor: primary.wS,
    },
    conditionText: {
      textAlign: "center",
      fontFamily: h9.family,
      fontWeight: h9.weight,
      fontSize: h9.size,
      lineHeight: 0,
    },
  });
  
  export default WelcomeScreen;