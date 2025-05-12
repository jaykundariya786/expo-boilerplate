import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Demo1 from "../screens/Demo1/index";
import Demo2 from "../screens/Demo2/index";
import Demo3 from "../screens/Demo3/index";

// Define types for navigation
export type TopTabParamList = {
  Demo1: undefined;
  Demo2: undefined;
  Demo3: undefined;
};

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Demo1" component={Demo1} />
      <Tab.Screen name="Demo2" component={Demo2} />
      <Tab.Screen name="Demo3" component={Demo3} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
