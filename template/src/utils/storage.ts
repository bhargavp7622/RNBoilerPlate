import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  /**
   * Store data in local storage
   */
  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error(`Error saving data for key: ${key}`, e);
    }
  },

  /**
   * Retrieve data from local storage
   */
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
    } catch (e) {
      console.error(`Error reading data for key: ${key}`, e);
      return null;
    }
  },

  /**
   * Remove item from local storage
   */
  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(`Error removing key: ${key}`, e);
    }
  },

  /**
   * Clear all local storage
   */
  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Error clearing async storage', e);
    }
  },
};
