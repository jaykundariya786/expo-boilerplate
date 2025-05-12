import "../gesture-handler";
import "react-native-reanimated";
import { StatusBar, View } from "react-native";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import store from "@/redux/store";

import StackNavigation from "../routes/StackNavigation";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(() => {
      setAppIsReady(true);
    }, 1500);
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, marginTop: insets.top }}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        animated={true}
        backgroundColor={Colors.tint}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </View>
  );
}
