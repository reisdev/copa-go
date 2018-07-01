import React, { Component } from 'react';

import { Font } from 'expo'
import MaterialIcons from './node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf'
import FontAwesome from './node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'

import { Text, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui'
import SideMenu from 'react-native-side-menu'
import ListaJogos from './src/Jogos'

class Menu extends Component {
  render(){
    return <View>
        <Text> Testando </Text>
      </View>
  }
}

export default class App extends React.Component {
  state = { loaded: false, searchWord: '', endpoint: '', filter: 'completed', order: 'DESC', country: ''}
  openNav = (e) => {
    this.setState({nav: !this.state.nav})
  }
  header = {
    leftElement : "menu",
    centerElement : "CopaGO",
    rightElement: {
        menu : {
            icon: 'filter-list',
            labels: ['Todos','Agora','Hoje','Próximos','Concluídos','Mais recentes','Mais Antigos']
        }
    },
    onRightElementPress: (label) => {
      switch(label.index) {
        case 0:
          this.setState({endpoint: '', filter: 'completed'})
          break
        case 1:
          this.setState({endpoint: 'current', filter: ''}, () => { console.log(this.state)})
          break
        case 2:
          this.setState({endpoint: 'today', filter: ''})
          break
        case 3:
          this.setState({filter: 'future'})
          break
        case 4:
          this.setState({filter: 'completed'})
          break
        case 5:
          this.setState({order: 'DESC'})
          break
        case 6:
          this.setState({order: 'ASC'})
          break
      }
    },
    searchable: {
      autoFocus: true,
      placeholder: 'Digite a sigla do time desejado',
      onChangeText: (team) => {
        team === null ? team = '' : ''
        this.setState({searchWord: team, order: 'DESC'})
      },
      onSearchClose: () => {
        this.setState({searchWord: '', order: 'DESC'})
      }
    },
    onLeftElementPress: () => { this.openNav() }
  }
  async componentWillMount(){
    try{
      await Font.loadAsync({MaterialIcons, FontAwesome})
      this.setState({loaded: true})
    }
    catch(error){
      alert('Error while loading the fonts: ',error)
    }
  }
  render() {
    const menu = <Menu />
    return this.state.loaded ? (
      <View style={{flex: 1}}>
        <View style={{ paddingTop: 26, backgroundColor: '#093377'}}>
          <Toolbar style={{ flex: 1,backgroundColor: '#093377'}}{...this.header}/>
          <ListaJogos style={{flex: 1}}
                  country={this.state.searchWord}
                  order={this.state.order}
                  filter={this.state.filter}
                  endpoint={this.state.endpoint}/>
        </View>
      </View>
    ) : null
  }
}