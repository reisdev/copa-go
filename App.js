import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header'
import ListaJogos from './src/Jogos'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ListaJogos/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
