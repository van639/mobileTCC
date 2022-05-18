import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { api } from "../../../api";

export default function BtnFiltrar({ father, setOngsFiltradasPorCategorias }) {

  const [nomeOngFiltradas, setnomeOngFiltradas] =useState([]);
  const [dataOng, setDataOng] = useState([]);

  React.useEffect(() => {
    onSubmit();
  }, []);
  console.log("nome da opcao selecionada", father);
    const onSubmit =() =>{
      if (father.length > 0) {
      api
        .post("/category/filter", {
          categorias: [father],
        })
        .then((response) => {
          setnomeOngFiltradas(response.data.data);
        });
    }

    console.log("pegando o nome das opçoes selecionadas e buscando ong que trabalham com essa categoria",nomeOngFiltradas);
    if(nomeOngFiltradas.length != 0){ 

      api.get(`/ong`).then((response) => {
        setDataOng(response.data.data)
      });

      const ongsFiltradas = []; 
      
      dataOng.map((ong) => { 
      
      if (nomeOngFiltradas.includes(ong.nome)) { 
      
      ongsFiltradas.push(ong); 
      
      } 
  }); 

  setOngsFiltradasPorCategorias(ongsFiltradas); 
  
  
  }
  }
  

  return (
    <TouchableOpacity style={styles.btnFiltrar} onPress={() => {onSubmit()}}>
      <Text>Filtrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
