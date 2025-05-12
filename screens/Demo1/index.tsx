import React from "react";
import { Text, View } from "react-native";
import DataComponent from "@/components/DataComponent";
import { FONTS } from "@/assets";

const Demo1: React.FC = () => {
  return (
    <View>
      <Text style={{ fontFamily: FONTS.InterBlack }}>Demo1</Text>
      <DataComponent />
    </View>
  );
};

export default Demo1;
