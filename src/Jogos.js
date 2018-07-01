import React, { Component } from 'react';

import { View, Text, FlatList, RefreshControl } from 'react-native';
import { Card } from 'react-native-elements'

import axios from 'axios'

import style from './style'

class Jogo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const home = this.props.home_team
        const away = this.props.away_team
        return (
            <Card style={{backgroundColor: this.props.status === 'completed' ? 'green': 'white'}}>
                <View style={style.card}>
                    <Text style={style.cardTitle}> 
                        <Text style={home.country === this.props.winner ? style.winner : ''}>{home.country} {home.goals}</Text> x <Text style={away.country === this.props.winner ? style.winner : ''}>{away.goals} {away.country}</Text>
                    </Text>
                    <Text style={style.cardText}> 
                        Cidade: {this.props.venue}
                    </Text>
                </View>
            </Card> 
        );
    }
}

class ListaJogos extends Component {
    state= {
        jogos: [],
        refreshing: true,
        endpoint: '',
        order: 'DESC',
        filter: 'completed',
        country: ''
    }
    async componentDidMount(){
        this.getGames()
    }
    componentDidUpdate(){
        if(this.props.endpoint !== this.state.endpoint ||
            this.props.order !== this.state.order || 
            this.props.filter !== this.state.filter ||
            this.props.country !== this.state.country){
                this.setState({
                    filter: this.props.filter,
                    endpoint: this.props.endpoint,
                    order: this.props.order,
                    country: this.props.country,
                    refreshing: true
                },() => { this.getGames() })
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true, jogos: []})
        this.getGames()
    }
    getGames = async () => {
        var URL = `http://worldcup.sfg.io/matches/`
        if(this.state.country !== '')
            URL += `country?by_date=${this.props.order}&fifa_code=${this.state.country}`
        else URL += `${this.state.endpoint}?by_date=${this.state.order}`
        try {
            const response = await axios.get(URL)
            if(this.state.filter !== '') {
                this.setState({
                    jogos: await response.data.filter(({status}) => status === this.state.filter )
                },() => { this.setState({refreshing: false}) })
            }
            else this.setState({
                jogos: await response.data,
            },() => { this.setState({refreshing: false}) })
        }
        catch(error) {
            this.setState({jogos: []},() => {this.setState({refreshing: false})})
        }
    }
    render(){
        return( 
            <View style={style.page}>
                <FlatList
                        data={this.state.jogos.map(jogo => { return { key: jogo.fifa_id, ...jogo }})}
                        renderItem={({item}) => <Jogo key={item.fifa_id} {...item} />}
                        refreshControl={ <RefreshControl refreshing={this.state.refreshing}
                                         onRefresh={this._onRefresh}/>}>
                </FlatList>
            </View>
        );
    }
}

export default ListaJogos