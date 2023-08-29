import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculatorScreen } from './src/screens/Calculator.screen'
import { styles } from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView style={{ ...styles.background, ...styles.f1 }}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>

  )
}

export default App