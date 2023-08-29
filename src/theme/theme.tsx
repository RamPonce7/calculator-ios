import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    f1: {
        flex: 1
    },
    background: {
        backgroundColor: 'black',
    },
    calculatorScreen: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end',

    },
    calculatorScreenHorizontal: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        marginHorizontal: 10
    },
    prevResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '500'
    },
    buttonHorizontal: {
        width: 60,
        height: 60,
    },
    buttonTextHorizontal: {

    },
    functionalButtonBackground: {
        backgroundColor: '#9B9B9B',
    },
    numericalButtonBackground: {
        backgroundColor: '#2d2d2d',
    },
    operationalButtonBackground: {
        backgroundColor: '#FF9427',
    },
    operationalButtonActiveBackground: {
        backgroundColor: 'white',
    },
    functionalButtonText: {
        color: 'black',
    },
    numericalButtonText: {
        color: 'white',
    },
    operationalButtonText: {
        color: 'white',
    },
    operationalActiveButtonText: {
        color: '#FF9427',
    },
    buttonPanel: {
        flex: 5,
    }, resultPanel: {
        flex: 5,
        flexDirection: 'column'
    }
});