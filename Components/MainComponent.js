// ExampleComponent.js
import React, { useContext, useEffect } from 'react';
import LanguageContext from './LanguageContext';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../Redux/ThemeSlice';

const MainComponent = () => {
  const { translate } = useContext(LanguageContext);
  const theme = useSelector(state=>state.theme) //Needs to be call in every screen
  const dispatch = useDispatch()

  const handleLogin = async()=>{
    try {
      const response = await fetch('http://192.168.1.112:53265//KPayAPI/LoginAPIJSON?token=S1BBWU1PQklMRUFQUElOVEVHUkFUSU9O&username=info@agnisolar.com&password=owner123')

      const useData = await response.json()
      console.log({useData})

    } catch (error) {
      console.log("Error Logging in: ", error.message)
    }
  }

  return (
    <View style={{backgroundColor: theme.data=='LIGHT' ? 'transparent' : 'black'}}>
      <Text style={theme.data=='LIGHT'? styles.text : styles.darkText}>{translate("Hello")}</Text>
      <Text style={theme.data=='LIGHT'? styles.text : styles.darkText}>{translate("Welcome")}</Text>
      <TouchableOpacity onPress={()=>{
        dispatch(changeTheme('LIGHT'))
      }}>
        <Text>Light Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        dispatch(changeTheme('DARK'))
      }}>
        <Text>Dark Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 40}} onPress={handleLogin}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  text:{
    color: 'black'
  },
  darkText: {
    color: 'white'
  }
})