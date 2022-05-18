import {  StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';

export default function ItemFilter({item, setProps, value, data }) {

  const [checked, setChecked] = useState(false);
  const [teste, setTeste] = useState([]);

//  console.log();  
  // const onChangeValue = (itemSelected) => {
    
    // const newData = data.map(item => {
    //   if( item.idCategorias == itemSelected.idCategorias){
    //     return {          
    //       ...item,
    //       selected: !item.selected
    //     }
        
    //   }
    //   return{
    //     ...item,
    //     selected: item.selected
    //   }
    // })

    // if(item.selected == true){
    //   console.log("novo valor", newData)
    // }
    // setProps(...newData);
    // console.log(value);
    
    // console.log(itemSelected);
    // console.log("num deu certo ",value)
  // }

  // function itensSelecionados(item){
  //   setChecked(!checked);
  //   let index = teste.findIndex(i => i?.idCategorias === item?.idCategorias);
  //   let arrSelected = [... teste];

  //   if(index != -1){
  //     arrSelected.splice(index, 1);
  //   }else{
  //     if(arrSelected.length >= 0){
  //       arrSelected.push(item.nome)
  //     }
  //   }

  //   setProps(arrSelected);
  //   console.log(item);
  // }

    return(
      <View style={{flexDirection:"row", alignItems:'center'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color="red"
          onPress={() => {setProps(item.nome); setChecked(!checked);}}
          // onValueChange={() => } 
        />
        <Text>
          {item.nome}
        </Text>
    </View>
    
    )
    
}

const styles = StyleSheet.create({})