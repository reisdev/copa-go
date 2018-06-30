import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import axios from 'axios'

import style from './style'

class Jogo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const home = this.props.home_team
        const away = this.props.away_team
        return <View style={style.card}>
                <Text style={style.cardTitle}> 
                    <Text style={home.country === this.props.winner ? style.winner : ''}>{home.country} {home.goals}</Text> x <Text style={away.country === this.props.winner ? style.winner : ''}>{away.goals} {away.country}</Text>
                </Text>
                <Text style={style.cardText}> 
                    Cidade: {this.props.venue}
                </Text>
            </View>
    }
}

class ListaJogos extends Component {
    state= {
        jogos: []
    }
    async componentDidMount(){
        const response = await axios.get('http://worldcup.sfg.io/matches/')
        this.setState({jogos: await response.data.filter(({status}) => status ==='completed')})
    }
    render(){
        return( 
            <View style={style.page}>
                <FlatList data={this.state.jogos.map(jogo => { return { key: jogo.fifa_id, ...jogo }})}
                        renderItem={({item}) => <Jogo key={item.fifa_id} {...item} />}>
                </FlatList>
            </View>
        );
    }
}

export default ListaJogos