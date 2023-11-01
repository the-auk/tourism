import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SecondaryButton from "../components/secondaryButton";
import InputField from "../components/inputField";
import {
  userIcon,
  homeIcon,
  emailIcon,
  passwordIcon,
  backArrow,
} from "../styles/icons";
import { horizontalScale, verticalScale } from "../styles/Metric";
import Header from "../components/header";
import MapViewCustom from "../components/mapView";

function BookScreen({ route, navigation }) {
  const { place } = route.params;
  const [name, setName] = useState("");
  const [fromDate, setFromDate] = useState(new Date(1598051730000));
  const [toDate, setToDate] = useState(new Date(1598051730000));
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const handleSubmit = () => {
    // You can implement the submission logic here
    // For now, let's just log the form data
    console.log({
      name,
      fromDate,
      toDate,
      numberOfPeople,
      pickupLocation,
    });
  };

  return (
    <View style={styles.container}>
      <Header text={place} />
      <MapViewCustom />
      <View style={styles.formCOnt}>
        <InputField
          placeholder="Name"
          setText={setName}
          val={""}
          isPassword={false}
          icon={userIcon(20, "black")}
          hasError={false}
          errorMsg={"Required"}
        />
        <InputField
          placeholder="From date: mm/dd/yyyy"
          setText={setFromDate}
          val={""}
          isPassword={false}
          icon={userIcon(20, "black")}
          hasError={false}
          errorMsg={"Required"}
        />
        <InputField
          placeholder="To date: mm/dd/yyyy"
          setText={setToDate}
          val={""}
          isPassword={false}
          icon={userIcon(20, "black")}
          hasError={false}
          errorMsg={"Required"}
        />
        <InputField
          placeholder="Number of people"
          setText={setNumberOfPeople}
          val={""}
          isPassword={false}
          icon={userIcon(20, "black")}
          hasError={false}
          errorMsg={"Required"}
        />
        <InputField
          placeholder="Pick up location"
          setText={setPickupLocation}
          val={""}
          isPassword={false}
          icon={userIcon(20, "black")}
          hasError={false}
          errorMsg={"Required"}
        />
        <SecondaryButton onPress={handleSubmit} text={"Book now!"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formCOnt: {
    width: "100%",
    height: verticalScale(400),
    justifyContent: "space-evenly",
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
});

export default BookScreen;
