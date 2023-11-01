import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Profile from "../screens/profile";
import { homeIcon } from "../styles/icons";
import { moderateScale } from "../styles/Metric";
import { Ionicons } from "@expo/vector-icons";
import { other, primary, secondary } from "../styles/Colors";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import ChatBot from "../screens/chatBot";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarStyle: {
          backgroundColor: "#f2f2f2",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Fontisto name="home" size={24} color={primary.mB} />
            ) : (
              <SimpleLineIcons name="home" size={24} color={secondary.sG} />
            ),
          tabBarLabelStyle: {
            color: primary.rB,
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatBot}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={26}
                color={primary.mB}
              />
            ) : (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={26}
                color={secondary.sG}
              />
            ),
          tabBarLabelStyle: {
            color: primary.rB,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="ios-person" size={24} color={primary.mB} />
            ) : (
              <Ionicons name="person-outline" size={24} color={secondary.sG} />
            ),
          tabBarLabelStyle: {
            color: primary.rB,
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
