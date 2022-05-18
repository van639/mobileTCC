import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        backgroundColor:theme.colors.white,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
    },
    icons: {
        width: 30,
        height: 30,
        color: theme.colors.secondary
    },
    iconsModal: {
        width: 30,
        height: 30,
        color: theme.colors.placeholder
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius:50,
        backgroundColor:theme.colors.grey
    },

    containerModalMenu:{
        width:"60%",
        backgroundColor:theme.colors.white,
        minHeight:"65%",
        maxHeight:"90%",
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        elevation:20,
        flexDirection:"column",
        padding:10,
        paddingBottom:"15%"
    },

    containerOpcoesModalMenu:{
        flexDirection:"row",
        marginLeft:10,
        marginTop:15,
        alignItems:"center"
    },
    txtOpcoesModalMenu:{
        color:theme.colors.placeholder,
        fontSize:20,
        fontFamily:theme.fonts.medium,
        marginLeft:20,
        marginTop:3
    },

    containerModalNotificacoes:{
        minWidth:"85%",
        maxWidth:"86%",
        backgroundColor:theme.colors.white,
        height:"90%",
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        elevation:20,
        flexDirection:"column",
        padding:10
    },

    containerPerfilNotificacao:{
        flexDirection:"row",
        height:"10%",
        alignItems:"center",
        // backgroundColor:"aqua",
        justifyContent:"flex-start",

    },

    containerNotificacao:{
        flexDirection:"row",
        height:"15%",
        width:"100%",
        alignItems:"center",
        justifyContent:"flex-start",
        marginTop:10
    },

    ImgNotificacao:{
        height:60,
        width:60,
        borderRadius:50,
        resizeMode:"cover",
        marginRight:15
    },
    txtNome:{
        fontFamily: theme.fonts.name,
        fontSize:14,
        color:theme.colors.black,
        lineHeight:15,
        marginLeft:-2,
        fontWeight:"bold",
        
    },

    txtDataNotificacao:{
        color:theme.colors.placeholder,
        fontSize:10,
        fontFamily:theme.fonts.regular,
        fontWeight:"800"
    },

    txtNotificacao:{
        width:"40%",
        fontFamily:theme.fonts.medium,
        color:theme.colors.black,
        fontSize:13,
        backgroundColor:"aqua"
    }
})
