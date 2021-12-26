import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

import estilo from './components/estilo';

export default function App() {
  return (
    <View style = {estilo.planodefundo}>
    <Text style = {estilo.tit}> Lanchonete do Latim </Text>

  <Image style = {estilo.imagem} source = {require ('./assets/lanchonete.jpg')}/>

  <Text style = {estilo.legenda}> Faça seu pedido! </Text>

    <FlatList 
    
    data = {paises}
    keyExtractor = {(item) => item.key.toString ()}
    numColumns = {2}
    renderItem = {({item}) => <Text style = {estilo.item}>{item.key} </Text>}
    
    
  />

  <Text> Dev. Junior: Vitoria Neris </Text>

    </View>
  );
}

const paises = [
  {key: 'Pastel R$4,99'},
  {key: 'Empada R$4,50'},
  {key: 'Coxinha R$2,50'},
  {key: 'Kibe R$1,00'},
  {key: 'Esfiha Fechada R$5,20'},
  {key: 'Esfiha Aberta R$4,50'},
  {key: 'Batata Frita peq. – R$3,00'},
  {key: 'X-burguer R$4,50'},
  {key: 'Croissant R$3,50'},
  {key: 'Fogazza  R$1,99'},
   
  ]