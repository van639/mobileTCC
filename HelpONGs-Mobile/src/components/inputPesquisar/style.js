import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
      borderWidth:1,
      borderColor:theme.colors.black,
      height:30,
      width:"70%",
      borderRadius:5,
      padding:3,
      alignSelf:"flex-end",
      justifyContent:"space-between",
      flexDirection:"row",
      alignContent:'center'
    },
    input:{
        height:30,
        width:"90%",
        alignSelf:"center"
    }
})