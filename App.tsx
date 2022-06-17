import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';
import {ThemeContext} from './src/context/ThemeContext'
import { myColors } from './src/styles/Color';


export default function App() {
  const  [theme,setTheme]=useState('light')

  return (
    <ThemeContext.Provider value={theme} >
    <SafeAreaView style={theme==='light'?styles.container:[styles.container,{backgroundColor:'#000'}]}>
      <StatusBar style="auto" />
      <Switch
          value={theme=='light'}
          onValueChange={()=>{
            setTheme(theme==='light'?'dark':'light')
          }}
        ></Switch>
        <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
