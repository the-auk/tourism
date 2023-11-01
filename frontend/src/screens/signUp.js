import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ActivityIndicator
  } from "react-native";
  import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { primary, secondary, other } from '../styles/Colors';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../styles/Metric';
import SecondaryButton from '../components/secondaryButton';
import { h2, h4, h11, h6, h9 } from '../styles/Typography';
import InputField from '../components/inputField';
import { userIcon, homeIcon, emailIcon, passwordIcon, backArrow } from '../styles/icons';
import {createWithEmailAndPassword} from '../services/auth';

  const SignUp = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [firstNError, setFirstNError] = useState(false);
    const [lastNError, setLastNError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // const {currentUser, setCurrentUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [invalidErrors, setInvalidErrors] = useState({
      "email": false,
      "password": false,
      "community": false,
      "firstName": false,
      "lastName": false
    })
    const validateEmail = (emailAdd) => {
      const res = String(emailAdd)
        .toLowerCase()
        .trim()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      return res;
    };
    const validatePassword = (pass) => {
      var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
      return re.test(pass);
    }
    const handleSignUp  = async () => {
      await createWithEmailAndPassword(email, password);
    }
    return (
      <View style={styles.container}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        {backArrow(24, primary.mB)}
        </Pressable>
        <KeyboardAwareScrollView>
                  <View style={styles.headerSection}><Text style={styles.heading1}>Welcome</Text>
        <Text style={styles.heading2}>Create an account to get started</Text>
        </View>
        <View style={styles.inputSection}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>first name</Text>
            <InputField placeholder="first name" setText={setFirstName}val={firstName} isPassword={false} icon={userIcon(20, firstNError ? other.mR : secondary.oB)} hasError={firstNError || invalidErrors["firstName"]} errorMsg={invalidErrors["firstName"] ? "Enter valid name" : "Feild Required"}/>    
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>last name</Text>
            <InputField placeholder="last name" setText={setLastName} val={lastName} isPassword={false} icon={userIcon(20, lastNError ? other.mR : secondary.oB)} hasError={lastNError || invalidErrors["lastName"]} errorMsg={invalidErrors["lastName"] ? "Enter valid name" : "Feild Required"}/>    
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>email</Text>
            <InputField placeholder="email" setText={setEmail} val={email} isPassword={false} icon={emailIcon(20, emailError ? other.mR : secondary.oB)} hasError={emailError || invalidErrors["email"]} errorMsg={invalidErrors["email"] ? "Enter in the format: name@example.com" : "Feild Required"}/>    
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>password</Text>
            <InputField placeholder="must have atleast 8 characters" setText={setPassword} val={password} isPassword={true} icon={passwordIcon(20, passwordError ? other.mR : secondary.oB)} hasError={passwordError || invalidErrors["password"]} errorMsg={invalidErrors["password"] ? "Password must contain atleast 8 characters, one uppercase and a special character" : "Feild Required"}/>   
            {signUpError && <Text style={styles.errorMsg}>Error: Please check you inputs again</Text>} 
          </View>
  
        </View>
        <SecondaryButton  text={loading ? <ActivityIndicator/> : "Create Account"}mT={8} mb={0} onPress={handleSignUp}></SecondaryButton>
        </KeyboardAwareScrollView>
        <View style={styles.bottomSection}>
          <Pressable onPress={()=>{navigation.navigate('login')}}>
          <Text style={styles.bottomText}>Already have an account? <Text style={{textDecorationLine:'underline'}}>Log In</Text></Text>
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
    paddingTop:verticalScale(53),
    paddingBottom:verticalScale(49),
    paddingHorizontal:horizontalScale(20)
  },
  backArrow:{
    height:moderateScale(44),
    width:moderateScale(44),
    justifyContent:'center',
    alignItems:'flex-start',
  },
  headerSection:{
    paddingTop:verticalScale(16),
    paddingBottom:verticalScale(40)
  },
  heading1:{
    marginBottom:verticalScale(8),
    fontFamily:h2.family,
    fontSize:h2.size,
    fontWeight:h2.weight,
    lineHeight:h2.size,
    color:primary.mB
  },
  heading2:{
    fontFamily:h4.family,
    fontSize:h4.size,
    fontWeight:h4.weight,
    lineHeight:h4.size,
    color:primary.mB
  },
  inputWrapper:{
    paddingBottom:verticalScale(16)  
  },
  inputLabel:{
    marginBottom:verticalScale(4),
    fontSize:h6.size,
    fontFamily:h6.family,
    fontWeight:h6.weight,
    color:secondary.oB
  },
  bottomSection:{
    alignItems:'center',
    position:'absolute',
    bottom:verticalScale(49),
    left:horizontalScale(20),
    width:'100%'
  },
  bottomText:{
    paddingTop:16,
    fontFamily:h9.family,
    fontSize:h9.size,
    fontWeight:h9.weight
  },
  errorMsg: {
    paddingTop: verticalScale(4),
    fontFamily: h11.family,
    fontSize: h11.size,
    fontWeight: h11.weight,
    color: other.mR
  }
});

export default SignUp;