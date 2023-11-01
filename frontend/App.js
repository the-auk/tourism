import Navigation from './src/navigation/navigation';
import { AuthProvider } from './src/services/AuthContext';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Inter_500Medium, Inter_400Regular } from "@expo-google-fonts/inter";

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Montserrat_500Medium
  });

  /**
   * wait for fonts to load and
   * TO_DO: show splash screen 
   */
  if(!fontsLoaded) return null;

  /**
   * Wrap the navigation with with Auth Provider (User)
   */
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}
