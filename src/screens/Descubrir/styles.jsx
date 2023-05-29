import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: colors.backgroundApp,
    },
    titleCotainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titles: {
        color: colors.white,
        fontSize: 24,
        fontFamily: "SourceSerifPro",
        margin: "1.5%"
    }
})

export default styles