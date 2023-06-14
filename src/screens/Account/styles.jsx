import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: colors.backgroundApp,
    },
    buttonContainer:{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: colors.yellowText,
        borderWidth: 1,
        borderRadius: 100,
        position:"absolute",
        marginTop: "50%",
        width: "41%"
    },
    text: {
        color: colors.yellowText
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 100,
        position:"absolute",
        marginTop: "50%",
    },
    img:{
        width: 250,
        height: 250,
        borderRadius: 150
    }
})

export default styles