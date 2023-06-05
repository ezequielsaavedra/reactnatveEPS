import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    renderItemStyle:{
        flex: 1,
        marginTop: "9%",        
    },
    descripcionContainer: {
        margin: "4%"
    },
    descripcionStyle:{
        color: colors.white,
        height: "auto",
        width: "100%",
        paddingTop: 3,
        marginTop: "4%",
        fontFamily: "SourceSerifPro",
        fontSize: 20
    },
    title: {
        fontSize: 30,
        color: colors.yellowText,
        textDecorationLine: "underline",
        
    },
    imagenContainer: {
        flex: 1
    },
    imagenStyle:{
        width: "100%",
        height: "100%",
    }
})

export default styles