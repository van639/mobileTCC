import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
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
        // backgroundColor:"green"
    },

    btnDoar:{
        backgroundColor:theme.colors.primary,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        width:110,
        height:30,
        alignSelf:"center"
    }   
})