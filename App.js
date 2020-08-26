import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FlashMessage from 'react-native-flash-message';
import {AppLoading} from 'expo'
import { useFonts } from '@use-expo/font';

import "./src/config/ReactotronConfig";
import Index from "./src";
import { store, persistor } from "./src/store";

export default function App() {
  let [isLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
  });

  // console.log(fontsLoaded);

  if(!isLoaded) {
    return <AppLoading />
  }else {
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
 
}
