import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/services/apiSlice";
import { Text, View } from "react-native";
import { AppDispatch, RootState } from "@/redux/store";

const DataComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Text>Fetched Data:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default DataComponent;
