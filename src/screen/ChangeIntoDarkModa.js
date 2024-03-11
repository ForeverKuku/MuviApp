import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';


export const ChangeIntoDarkModa = createContext();

export const ThemeProviderIntoDarkModa = ({ children }) => {
  const [dark, setDark] = useState(false);
  const datas = {
    name: 'Faith',
    email: 'swen@gmail.com',
  };

  useEffect(() => {
    const loadDarkModePreference = async () => {
      try {
        const savedDarkMode = await AsyncStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
          setDark(savedDarkMode === 'true');
        }
      } catch (error) {
        console.error('Error loading dark mode preference:', error);
      }
    };
    loadDarkModePreference();
  }, []);

  const changeIntoDark = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    AsyncStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <ChangeIntoDarkModa.Provider value={{ datas, dark, changeIntoDark }}>
      {children}
    </ChangeIntoDarkModa.Provider>
  );
};