import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ActivityIndicator,
  } from "react-native";
  import React, { useState, useEffect } from "react";
//   import { logInWithEmailAndPassword, isEmailVerified } from "../service/firebase";
  import { useContext } from "react";
//   import { AuthContext } from "./authContext";
//   import { getUserInfo } from "../service/service";
  import {
    horizontalScale,
    verticalScale,
    moderateScale,
  } from "../styles/Metric";
  import SecondaryButton from "../components/secondaryButton";
  import { h2, h4, h5, h6, h9, h11 } from '../styles/Typography';
  import { other, primary, secondary } from '../styles/Colors';
  import InputField from "../components/inputField";
  import { emailIcon, passwordIcon, backArrow } from '../styles/icons';
  import {logInWithEmailAndPassword} from '../services/auth';

  const Login = ({navigation}) => {
  
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPass, setFocusPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // const { currentUser, setCurrentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [wrongCred, setWrongCred] = useState(false);
  
    const validateEmail = () => {
      setEmailError(false);
      const res = String(email)
        .toLowerCase()
        .trim()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      setEmailError(!res);
      return res;
    };
  
    const handleSignIn = async () => {
      await logInWithEmailAndPassword(email, password);
    };
    return (
      <View style={styles.container}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        {backArrow(24, primary.mB)}
        </Pressable>
        <View style={styles.headerSection}>
          <Text style={styles.heading1}>Welcome Back!</Text>
          <Text style={styles.heading2}>Log in with your email and password</Text>
        </View>
  
        <View style={styles.inputSection}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>email</Text>
            <InputField placeholder="email" setText={setEmail} val={email} isPassword={false} icon={emailIcon(20, emailError ? other.mR : secondary.oB)} hasError={emailError} errorMsg={"Feild Required"}/>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>password</Text>
            <InputField placeholder="must have atleast 8 characters" setText={setPassword} val={password} isPassword={true} icon={passwordIcon(20, passwordError ? other.mR : secondary.oB)} hasError={passwordError} errorMsg={"Feild Required"}/>
            {wrongCred && <Text style={styles.errorMsg}>Incorrect email/password</Text>}    
          </View>
        </View>
        <SecondaryButton
          onPress={handleSignIn}
          text={loading ? <ActivityIndicator/> : "Log In"}
          mT={0}
          mb={0}
        ></SecondaryButton>
        <View style={styles.bottomSection}>
          <Pressable onPress={()=>{navigation.navigate('forgotPassword')}}>
          <Text style={styles.bottomText}>
            Having trouble loggin in? <Text style={{textDecorationLine:'underline'}}>Reset Password</Text>
          </Text>
          </Pressable>
          <Pressable onPress={()=>{navigation.navigate('signUp')}}>
          <Text style={styles.bottomText}>
            Don't have an account yet? <Text style={{textDecorationLine:'underline'}}>Sign Up</Text>
          </Text>
          </Pressable>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      height: verticalScale(844),
      width: horizontalScale(390),
      backgroundColor: primary.wS,
      paddingTop: verticalScale(53),
      paddingBottom: verticalScale(49),
      paddingHorizontal: horizontalScale(20),
    },
    backArrow: {
      height: moderateScale(44),
      width: moderateScale(44),
      justifyContent: "center",
      alignItems: "flex-start",
    },
    headerSection: {
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(40),
    },
    heading1: {
      marginBottom: verticalScale(8),
      fontFamily: h2.family,
      fontSize: h2.size,
      fontWeight: h2.weight,
      lineHeight: h2.size,
      color: primary.mB,
    },
    heading2: {
      fontFamily: h4.family,
      fontSize: h4.size,
      fontWeight: h4.weight,
      lineHeight: h4.size,
      color: primary.mB,
    },
    inputWrapper: {
      paddingBottom: verticalScale(24),
    },
    inputLabel: {
      marginBottom: verticalScale(4),
      fontSize: h6.size,
      fontFamily: h6.family,
      fontWeight: h6.weight,
      color:secondary.oB
    },
    bottomSection: {
      alignItems: "center",
      position: "absolute",
      bottom: verticalScale(49),
      left: horizontalScale(20),
      width: "100%",
    },
    bottomText: {
      paddingTop: 16,
      fontFamily: h9.family,
      fontSize: h9.size,
      fontWeight: h9.weight,
    },
    errorMsg: {
      paddingTop: verticalScale(4),
      fontFamily: h11.family,
      fontSize: h11.size,
      fontWeight: h11.weight,
      color: other.mR
    }
  });
  export default Login;