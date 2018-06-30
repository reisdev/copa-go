import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    page:{
        width: '100%',
        height: 'auto',
        paddingBottom: 80,
        alignContent: 'center'
    },
    btn: {

    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0,0,0,.125)',
        borderRadius: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10
    },
    cardTitle: {
        fontSize: 20
    },
    cardText: {
        fontSize: 15
    }
})