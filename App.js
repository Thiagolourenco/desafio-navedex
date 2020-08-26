import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FlashMessage from 'react-native-flash-message';
// import { useFonts,} from "@expo-google-fonts/inter";
// import { useFonts } from 'expo-font'
import "./src/config/ReactotronConfig";
import Index from "./src";
import { store, persistor } from "./src/store";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  // });

  // console.log(fontsLoaded);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Index />
          <FlashMessage position="top" floating={true} />

        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
