import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';

export default function Select( options, onChangeSelect) {
    const [modalVisible, setModalVisible ] = useState(false);
    const [data, setData] = useState([])
    // console.log(JSON.stringify(options))
    function renderOption(item){
        return(
            <TouchableOpacity onPress={()=>{onChangeSelect(item.idEstado);setModalVisible(false)}} style={{height:20}}>
                <Text>{item.nome}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(true)}>
        <Text style={styles.txtSelecione}>Selecione um estado</Text>
        <Icon
            name="chevron-down"
            size={15}
        />
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <SafeAreaView>
        <View style={styles.headerModal}>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Icon
                name="chevron-left"
                size={30}
            />
        </TouchableOpacity>
        <Text style={styles.modalTitulo}>Selecione um estado</Text>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Text style={styles.modalCancel}>Cancelar</Text>
        </TouchableOpacity>
        </View>
        <FlatList
            data={ options ?? [{
                    "idEstado": 27,
                    "nome": "Tocantins",
                    "sigla": "TO",
                }]}
            keyExtractor={(item) => String(item.id)} renderItem={({item}) =>renderOption(item)}
        />
      </SafeAreaView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        borderWidth:1,
        borderColor:"#CCC",
        fontSize:18,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:12
    },
    txtSelecione:{
        fontSize:16,
        color:"#555"
    },
    headerModal:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:12,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        paddingBottom:12
    },
    modalTitulo:{
        fontSize:18,
        color:theme.colors.placeholder
    },
    modalCancel:{
        fontSize:14,
        color:"blue",
        fontWeight:"bold"
    }
})