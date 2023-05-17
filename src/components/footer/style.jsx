import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    footer:{
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.black
    },
    textFooter: {
        color: colors.yellowText,
        alignContent: "center",
        fontFamily: "SourceSerifPro"
    },
    iconFooter: {
        color: colors.yellowText,
        alignContent: "center",
        marginLeft: 20
    }
})

export default styles