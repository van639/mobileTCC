import { StyleSheet, Text, Modal, View, Image, ScrollView, TouchableOpacity , ToastAndroid} from 'react-native'
import React, {useEffect, useState} from 'react';
import { theme } from '../../global/styles/theme';
import Icon from "react-native-vector-icons/Feather";
import { api } from '../../../api';


export default function ModalDoar({data}) {
  const [visibility, setVisibility] = useState(false);
  const [idOng, setIdOng] = useState(0);
  const [dadosBancarios, setDadosBancarios] = useState([]);
  const [dadosDeContato, setDadosDeContato] = useState([]);
  const [meiosDeDoacao, setMeiosDeDoacao] = useState([]);

if(idOng != 0){
//  useEffect(() =>{
    api.get(`/bank-data/${idOng}`).then((response) => {
      setDadosBancarios(response.data.data);
      console.log(response.data.data);
    }).catch((error) => {
      const errorJSON = JSON.stringify(error);
      if(errorJSON.includes("404")){
        setVisibility(false);
        ToastAndroid.show(
         "Desculpe, a ong selecionada ainda não informou seus dados para doação",
          ToastAndroid.LONG
        );
      }
     
    });
    api.get(`/contact/${idOng}`).then((response) => {
      setDadosDeContato(response.data.data);
    }).catch((error) => {
      console.log(error);
    });
    api.get(`/donation-data/${idOng}`).then((response) => {
      setMeiosDeDoacao(response.data.data);
    }).catch((error) =>{
      console.log("error requisição meios de doacao", error)
    })
  
  // }, [])
  setIdOng(0);
}

  return (
    <View>
      <TouchableOpacity style={styles.btnDoar} onPress={()=> {
        setVisibility(true);
        setIdOng(data.idOng);
      }}>
      <Text>Doar</Text>
    </TouchableOpacity>
      <Modal animationType="fade" visible={visibility} transparent>
        <View style={styles.containerPrincipal}>
          <View style={styles.container}>
          <ScrollView>
          <Icon
            name="x"
            size={30}
            style={styles.icon}
            onPress={() => {
              setVisibility(false);
              }}
          />
          <Text style={styles.txtTitulo}>Ultilize as informações{"\n"}para fazer uma doação</Text>
          <Image
            source={require("../../assets/img/ImgmPrincipalModalDoar.png")}
            style={styles.imgPrincipal}
          />
          <View style={{marginBottom:10}}>
            <Text style={styles.txtSubtitulo}>Informações de contato</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.informacoestxt}>Celular: </Text>
              <Text style={styles.informacoestxtbold}>{dadosDeContato.numero}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.informacoestxt}>Telefone: </Text>
              <Text style={styles.informacoestxtbold}>{dadosDeContato.telefone}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.informacoestxt}>Email: </Text>
              <Text style={styles.informacoestxtbold}>{dadosDeContato.email}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.informacoestxt}>Site: </Text>
              <Text style={styles.informacoestxtbold}>{meiosDeDoacao.site}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.txtSubtitulo}>Meios De Doação</Text>
            <View style={{flexDirection:"row"}}>
              <View style={styles.containerMeiosdeDoacao}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.informacoestxt}>Conta: </Text>
                  <Text style={styles.informacoestxtbold}>{dadosBancarios.conta}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.informacoestxt}>Tipo: </Text>
                  <Text style={styles.informacoestxtbold}>{dadosBancarios.tipo}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.informacoestxt}>Pix: </Text>
                  <Text style={styles.informacoestxtbold}>{meiosDeDoacao.pix}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.informacoestxt}>Agencia: </Text>
                  <Text style={styles.informacoestxtbold}>{dadosBancarios.agencia}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.informacoestxt}>Banco: </Text>
                  <Text style={styles.informacoestxtbold}>{dadosBancarios.banco}</Text>
                </View>
              </View>
              <View style={styles.fotoBanco}>
                <Image
                  source={require('../../assets/img/banco.png')}
                  style={{resizeMode:"cover"}}
                />
              </View>
            </View>
          </View>
          </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  containerPrincipal:{
    flex:1,
    backgroundColor:"rgba(0, 0, 0, 0.4)",
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    height:"95%",
    width:"95%",
    backgroundColor:theme.colors.input,
    alignSelf:'center',
    borderRadius:10,
    paddingTop:10,
    paddingEnd:10,
    paddingStart:10
  },
  icon:{
    color:theme.colors.black,
    alignSelf:"flex-end"
  },
  txtTitulo:{
    alignSelf:'center',
    fontSize:25,
    fontFamily:theme.fonts.bold,
    textAlign:'center'
  },
  imgPrincipal:{
    height:250,
    width:230,
    resizeMode:'cover',
    // backgroundColor:"green",
    alignSelf: 'center'
  },
  txtSubtitulo:{
    fontFamily:theme.fonts.semiBold,
    fontSize:24,
    color:theme.colors.black,
    alignSelf:'center',
    marginBottom:10
  },
  informacoestxt:{
    fontSize:16,
    fontFamily:theme.fonts.regular,
    lineHeight:22,
    color:theme.colors.black,
    marginTop:3,
    alignSelf:'center'
  },
  informacoestxtbold:{
    fontSize:16,
    fontFamily:theme.fonts.semiBold,
    lineHeight:22,
    color:theme.colors.black,
    marginTop:3, alignSelf:'center'
  },
  containerMeiosdeDoacao:{
    width:"60%",
    alignSelf:"flex-start",
  }, 
  fotoBanco:{
    alignSelf:'flex-end',
    height:96,
    width:115,
    marginLeft: 20,
    borderRadius:5
  },btnDoar:{
    backgroundColor:theme.colors.primary,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    width:110,
    height:30,
    alignSelf:"center"
},
})