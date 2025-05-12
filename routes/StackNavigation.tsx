import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigation from "@/routes/BottomNavigatio";
import DrawerNavigation from "@/routes/DrawerNavigation";
import TopTabNavigation from "@/routes/TopTabNavigation";

type StackParamList = {
  BottomTab: undefined;
  Drawer: undefined;
  TopTab: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomNavigation} />
      {/* <Stack.Screen name="Drawer" component={DrawerNavigation} /> */}
      {/* <Stack.Screen name="TopTab" component={TopTabNavigation} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
