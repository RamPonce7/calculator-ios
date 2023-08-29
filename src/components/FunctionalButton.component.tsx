import React from 'react'
import { styles } from '../theme/theme'
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

interface Props {
  label: string
  type: 'numerical' | 'operational' | 'functional'
  action: (number: string) => void
  currentOperation?: Boolean
}

export const FunctionalButtonComponent = ({ label, type, action, currentOperation }: Props) => {

  const { width, height } = useWindowDimensions()

  const isHorizontal = width > height

  return (
    <TouchableOpacity onPress={() => action(label)}>
      <View style=
        {[
          styles.button,
          type === 'functional' ? styles.functionalButtonBackground : type === 'numerical' ? styles.numericalButtonBackground : styles.operationalButtonBackground,
          (currentOperation) && (styles.operationalButtonActiveBackground),
          isHorizontal && (styles.buttonHorizontal),
          label === '0' && { width: isHorizontal ? 140 : 180 },
        ]}>
        <Text style=
          {[
            styles.buttonText,
            label === '0' && { textAlign: 'left', paddingLeft: isHorizontal ? 20 : 30 },
            type === 'functional' ? styles.functionalButtonText : type === 'numerical' ? styles.numericalButtonText : styles.operationalButtonText,
            (currentOperation) && (styles.operationalActiveButtonText),
            isHorizontal && (styles.buttonTextHorizontal)
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>

  )
}
