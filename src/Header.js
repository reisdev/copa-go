import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
    render(){
        return <View style={style.header}>
                <Text style={style.title}> CopaGO - Jogos da copa </Text>
            </View>
    }
}

const style = StyleSheet.create({
    header : {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        minHeight: 80,
        backgroundColor: '#093377',
        width: '100%'
    },
    title: {
        fontSize: 25,
        color: 'white'
    }
})

export default Header