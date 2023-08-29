import { useState } from 'react';

export const useCalculator = () => {

    const [currentNumber, setCurrentNumber] = useState('0')

    const [prevNumber, setPrevNumber] = useState('0')

    const [operation, setOperation] = useState<'plus' | 'minus' | 'times' | 'divided'>()

    const [amountInitiated, setAmountInitiated] = useState(false)


    const resetNumber = () => {
        setCurrentNumber('0')
        setPrevNumber('0')
        setOperation(undefined)

    }

    const onPressNumber = (number: string) => {
        if (currentNumber.length < 8) {
            setAmountInitiated(true)
            if (currentNumber === '0') {
                if (number !== '0') {
                    setCurrentNumber(number)
                }
                if (number === '.') {
                    setCurrentNumber("0.")
                }
            }
            else {
                if (currentNumber.includes('.')) {
                    if (number !== '.') {
                        setCurrentNumber(currentNumber + number)
                    }
                } else {
                    setCurrentNumber(currentNumber + number)
                }

            }
        }
    }


    const delNumber = () => {
        if (currentNumber.includes('-') && currentNumber.length === 2) {
            setCurrentNumber('0')
        } else {
            if (currentNumber.length > 1) {
                setCurrentNumber(currentNumber.slice(0, currentNumber.length - 1))
            } else {
                setCurrentNumber('0')
            }
        }

    }

    const positiveNegative = () => {
        if (currentNumber !== '0') {
            if (currentNumber.includes('-')) {
                setCurrentNumber(currentNumber.replace('-', ''))
            } else {
                setCurrentNumber('-' + currentNumber)
            }
        }
    }
    const onPressOperation = () => {
        if (amountInitiated) {
            if (prevNumber !== '0') {
                calculate(true)
            } else {
                if (currentNumber.endsWith('.')) {
                    setPrevNumber(currentNumber.slice(0, -1))
                } else {
                    setPrevNumber(currentNumber)
                }
                setCurrentNumber('0')
            }
            setAmountInitiated(false)
        }
    }

    const OnPressPlus = () => {
        onPressOperation()
        setOperation('plus')
    }

    const onPressMinus = () => {
        onPressOperation()
        setOperation('minus')
    }

    const onPressTimes = () => {
        onPressOperation()
        setOperation('times')
    }

    const onPressDivided = () => {
        onPressOperation()
        setOperation('divided')
    }

    const onPressEquals = () => {
        calculate()
    }

    const calculate = (reCalculate = false) => {

        const cNumber = Number(currentNumber)
        const pNumber = Number(prevNumber)

        switch (operation) {
            case 'plus':
                if (reCalculate) {
                    setPrevNumber(`${cNumber + pNumber}`)
                    setCurrentNumber('0')
                } else {
                    setCurrentNumber(`${cNumber + pNumber}`)
                }
                break
            case 'minus':
                if (reCalculate) {
                    setPrevNumber(`${pNumber - cNumber}`)
                    setCurrentNumber('0')
                } else {
                    setCurrentNumber(`${pNumber - cNumber}`)
                }
                break
            case 'times':
                if (reCalculate) {
                    setPrevNumber(`${cNumber * pNumber}`)
                    setCurrentNumber('0')
                } else {
                    setCurrentNumber(`${cNumber * pNumber}`)
                }
                break
            case 'divided':
                if (currentNumber !== '0') {
                    if (reCalculate) {
                        setPrevNumber(`${pNumber / cNumber}`)
                        setCurrentNumber('0')
                    } else {
                        setCurrentNumber(`${pNumber / cNumber}`)
                    }
                }
                break
        }
        if (!reCalculate) {
            setPrevNumber('0')
            setOperation(undefined)
        }

    }




    return {
        currentNumber,
        setCurrentNumber,
        prevNumber,
        setPrevNumber,
        calculate,
        delNumber,
        OnPressPlus,
        onPressDivided,
        onPressMinus,
        onPressNumber,
        onPressOperation,
        onPressTimes,
        positiveNegative,
        resetNumber,
        operation,
        onPressEquals,
        amountInitiated

    }

}
