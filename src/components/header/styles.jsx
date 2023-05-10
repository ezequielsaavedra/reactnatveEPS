import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create ({
    header:{
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black
    },
    titleHeader: {
        color: colors.yellowText,
        alignContent: "center",
        fontSize:20
    }
})

export default styles