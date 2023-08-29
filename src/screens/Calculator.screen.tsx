import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { styles } from '../theme/theme'
import { FunctionalButtonComponent } from '../components/FunctionalButton.component'
import { useCalculator } from '../hooks/useCalculator.hook'



export const CalculatorScreen = () => {
    const {
        currentNumber,
        prevNumber,
        delNumber,
        OnPressPlus,
        onPressDivided,
        onPressMinus,
        onPressNumber,
        onPressTimes,
        positiveNegative,
        resetNumber,
        operation,
        onPressEquals
    } = useCalculator()

    const { width, height } = useWindowDimensions()

    const isHorizontal = width > height


    return (
        <View style={isHorizontal ? styles.calculatorScreenHorizontal : styles.calculatorScreen}>
            <View style={[isHorizontal && (styles.resultPanel)]}>
                {(operation) && (!isHorizontal) && (<Text style={styles.prevResult}>{prevNumber}</Text>)}
                <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{currentNumber}</Text>
                {(operation) && (isHorizontal) && (<Text style={styles.prevResult}>{prevNumber}</Text>)}
            </View>
            <View style={[isHorizontal && (styles.buttonPanel)]}>
                <View style={styles.row}>
                    <FunctionalButtonComponent label='C' type='functional' action={resetNumber} />
                    <FunctionalButtonComponent label='+/-' type='functional' action={positiveNegative} />
                    <FunctionalButtonComponent label='del' type='functional' action={delNumber} />
                    <FunctionalButtonComponent label='/' type='operational' action={onPressDivided} currentOperation={operation == 'divided'} />
                </View>
                <View style={styles.row}>
                    <FunctionalButtonComponent label='1' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='2' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='3' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='X' type='operational' action={onPressTimes} currentOperation={operation === 'times'} />
                </View>
                <View style={styles.row}>
                    <FunctionalButtonComponent label='4' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='5' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='6' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='-' type='operational' action={onPressMinus} currentOperation={operation === 'minus'} />
                </View>
                <View style={styles.row}>
                    <FunctionalButtonComponent label='7' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='8' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='9' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='+' type='operational' action={OnPressPlus} currentOperation={operation === 'plus'} />
                </View>
                <View style={styles.row}>
                    <FunctionalButtonComponent label='0' type='numerical' action={onPressNumber} />

                    <FunctionalButtonComponent label='.' type='numerical' action={onPressNumber} />
                    <FunctionalButtonComponent label='=' type='operational' action={onPressEquals} />
                </View>
            </View>
        </View>
    )
}
