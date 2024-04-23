import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LanguageProvider } from './Components/LanguageContext'
import MainComponent from './Components/MainComponent'
import { Provider } from 'react-redux'
import Store from './Redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <LanguageProvider>
        <MainComponent/>
      </LanguageProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})