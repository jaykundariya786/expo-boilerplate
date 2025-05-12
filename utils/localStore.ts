import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data
export const saveData = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data saved under key: ${key}`);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Get data
export const getData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

// Remove data
export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data removed from key: ${key}`);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

// Clear all storage
export const clearAllData = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
    console.log("All data cleared!");
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
};
