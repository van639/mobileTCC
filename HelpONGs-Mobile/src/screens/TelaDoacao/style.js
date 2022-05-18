import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%",
      flexDirection:"column"
    },
    containerOpcoes:{
        height:50,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        
    },
    txtOpcoes:{
      fontSize:20,
      fontFamily:theme.fonts.semiBold,
      color:theme.colors.black,
      
    },
    containerPesquisa:{
      paddingLeft:20,
      paddingRight:20,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    containerSelectEstado:{
      paddingLeft:20,
      paddingRight:20,
      flexDirection:"column",
      // backgroundColor:"aqua",
      marginTop:10
    },
    txtTituloEstado:{
      fontSize:20,
      fontFamily:theme.fonts.regular,
      color:theme.colors.black, 
      letterSpacing:-0.02,
      fontWeight:"600"
    },
    select:{
      height:50,
      borderWidth:1,
      borderColor:theme.colors.black,
      borderRadius:5
    },

    containerCardsDoar:{
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"center",
      marginBottom:70
    },

    containerCardsFavoritos:{
      flexDirection:"row-reverse",
      flexWrap:"wrap",
      justifyContent:"center",
      marginBottom:70,

    },

  });