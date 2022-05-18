import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { api } from "../../../api";
import ModalDoar from "../ModalDoar";

export default function CardDoar({ data }) {
  const [favoritar, setFavoritar] = useState("heart-o");
  const [state, setState] = useState(true);
  const [idUser, setIdUser] = useState(5);
  const [visibleModalDoacao, setVisibleModalDoacao] = useState(false);
  // const [favoriteOng, setFavoriteOng] = useState("heart")
  

  const { foto } = data;

  // console.log("data", data, "\nfoto",foto);

  const onsubmit = async () => {

      if (state == true) {
        setState(false);
        setFavoritar("heart");

        api
          .post(`/favorite`, {
            idOng: data.idOng,
            idUsuario: idUser,
          })
          .then((response) => {
            console.log("Ong favoritada com sucesso");
          }).catch((error) =>{
            console.log(error);
          })

      } else {
        setState(true);
        setFavoritar("heart-o");

        api.delete(`/favorite/${idUser}/${data.idOng}`)
        .then((response) => {
          console.log(response)
        }).catch((error) =>{
          console.log("erro desfavoritar",error);
        })
      }
  // }
  };

  return (
    <View style={styles.container}>
      <Icon
        name={favoritar}
        size={17}
        style={styles.icon}
        onPress={() => onsubmit()}
      />
      <Image source={{ uri: foto }} style={styles.imgOng} />
      <ModalDoar data={data}/>
    </View>
  );
}
