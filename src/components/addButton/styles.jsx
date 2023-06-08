import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    buttonContainer:{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: colors.yellowText,
        borderWidth: 1,
        borderRadius: 10,
        position:"absolute",
        marginTop: "50%",
        width: "50%"
    },
    text: {
        color: colors.yellowText
    }
})

export default styles