import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import { useAuth } from '../services/AuthContext';
import BottomTabs from './bottomTabs';
import TourPreview from '../screens/tourPreview';
import BookScreen from '../screens/bookScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useAuth();
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>{
          user ? 
          <>
            <Stack.Screen name="bottomTabs" component={BottomTabs} />
            <Stack.Screen name="tourPreview" component={TourPreview} />
            <Stack.Screen name="bookScreen" component={BookScreen} />
          </> :
          <>
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUp" component={SignUp} />
          </>
        }
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default Navigation;