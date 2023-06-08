import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    containerUno: {
        position: "absolute",
        backgroundColor: colors.white,
        borderRadius: 20,
        height: 35,
        width: 35,
        alignItems:"center",
        justifyContent:"center",
        alignSelf: "flex-end",
        opacity: 0.7
    },
    containerDos: {
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 20,
        height: 35,
        width: 35,
        alignItems:"center",
        justifyContent:"center",
        alignSelf: "flex-end",
    }
})

export default styles