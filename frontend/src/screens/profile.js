import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { grays, primary, secondary } from "../styles/Colors";
import { h1, h3, h4, h5, h6, h9, h11 } from "../styles/Typography";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../styles/Metric";
import { editIcon } from "../styles/icons";
import {signOutUser} from '../services/auth';

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circ}>
        <Text style={{ color: primary.wS, fontSize: 20 }}>RS</Text>
      </View>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.nameText}>Ripan Singh  </Text>
        {editIcon(20, primary.mB)}
      </TouchableOpacity>
      <View style={{ marginTop: 20, width: "100%" }}>
        <TextInput
          style={styles.inp}
          value={"sh.2100.ra@gmail.com"}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
      <TouchableOpacity
        style={{
          borderBottomWidth: moderateScale(0.75),
          borderColor: grays.fW,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
          flexDirection: 'row',
        }}
      >
        <Text style={{
              fontFamily: h4.family,
              fontSize: h4.size,
              fontWeight: h4.weight,
              lineHeight: h4.size,
        }}>Trips</Text>
        <Text>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBottomWidth: moderateScale(0.75),
          borderColor: grays.fW,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
          flexDirection: 'row'
        }}
        onPress={() => {
            signOutUser()
        }}
      >
        <Text style={{
              fontFamily: h4.family,
              fontSize: h4.size,
              fontWeight: h4.weight,
              lineHeight: h4.size,
        }}>Logout</Text>
        <Text>{">"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  circ: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primary.mB,
    marginTop: 20,
  },
  nameText: {
    fontFamily: h1.family,
    fontSize: h1.size,
    fontWeight: h1.weight,
    lineHeight: h1.size,
    color: primary.mB,
    marginTop: 20,
  },
  inp: {
    borderBottomWidth: moderateScale(0.75),
    borderTopWidth: moderateScale(0.75),
    borderColor: grays.fW,
    width: "100%",
    height: verticalScale(44),
    padding: 20,
    fontFamily: h4.family,
    fontSize: h4.size,
    fontWeight: h4.weight,
    lineHeight: h4.size,
  },
});

export default Profile;
