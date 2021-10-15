
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { MenuProvider } from 'react-native-popup-menu';
import FlashMessage from "react-native-flash-message";


export default function App() {
  return(
  <MenuProvider>
  <Navigation />
  <FlashMessage position="top" />
  </MenuProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
