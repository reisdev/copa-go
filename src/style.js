import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    page:{
        width: '100%',
        height: '100%',
        paddingBottom: 116,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20
    },
    cardText: {
        fontSize: 15
    },
    winner: {
        color: 'green'
    }
})