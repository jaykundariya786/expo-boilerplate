import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Demo1 from "../screens/Demo1/index";
import Demo2 from "../screens/Demo2/index";
import Demo3 from "../screens/Demo3/index";

type DrawerParamList = {
  Demo1: undefined;
  Demo2: undefined;
  Demo3: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Demo1" component={Demo1} />
      <Drawer.Screen name="Demo2" component={Demo2} />
      <Drawer.Screen name="Demo3" component={Demo3} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
