import {StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { api } from "../../../api";
import { theme } from "../../global/styles/theme";
import ModalDoar from "../ModalDoar";

export default function CardDoarFavorito({ data }) {
  const [favoritar, setFavoritar] = useState("heart");
  const [state, setState] = useState(true);
  const [idUser, setIdUser] = useState(5);
  const [removeCard, setRemoveCard] = useState(styles.visibleCard);
  // const [visibleModalDoacao, setVisibleModalDoacao] = useState(false);
  let myStatus = false;
  const [visibility, setVisibility] = useState(myStatus);
  // const [favoriteOng, setFavoriteOng] = useState("heart")
  const { foto } = data;

  // console.log("data", data, "\nfoto",foto);

  const onsubmit = async () => {
        setFavoritar("heart-o");

        api.delete(`/favorite/${idUser}/${data.idOng}`)
        .then((response) => {
          setRemoveCard(styles.removeCard)
        }).catch((error) =>{
          console.log("erro desfavoritar",error);
        })
      
  // }
  };

  return (
    <View style={[styles.container, removeCard]}>
      <Icon
        name={favoritar}
        size={17}
        style={styles.icon}
        onPress={() => onsubmit()}
      />
      <Image source={{ uri: foto }} style={styles.imgOng} />
      <ModalDoar data={data}/>
      <View style={{ display: "flex" }}>
      </View>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container:{
        height:165,
        width:142,
        borderRadius:7,
        backgroundColor:theme.colors.vagas,
        elevation:20,
        flexDirection:"column",
        padding:7,
        margin:20,
        justifyContent:"space-around",
    },
    icon:{
        color:"red",
        alignSelf:"flex-end",   
    },
    imgOng:{
        height:90,
        width:90,
        resizeMode:"contain",
        alignSelf:"center",
        // borderRadius:50,
    },

    btnDoar:{
        backgroundColor:theme.colors.primary,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        width:110,
        height:30,
        alignSelf:"center"
    },
    removeCard:{
      display:"none"
    },
    visibleCard:{
      display:"flex"
    },  
})