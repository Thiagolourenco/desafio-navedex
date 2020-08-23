import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { useFonts,} from "@expo-google-fonts/inter";
// import { useFonts } from 'expo-font'
import Index from "./src";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  // });

  // console.log(fontsLoaded);

  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}
