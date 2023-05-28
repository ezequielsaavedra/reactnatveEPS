import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    renderItemStyle:{
        flexDirection: "row",
        marginTop: "9%",
        borderRadius: 5,
        backgroundColor: colors.black
    },
    itemStyle:{
        borderColor: colors.white,
        borderWidth: 2,
        borderRadius: 10,
        color: colors.white,
        height: "auto",
        width: "100%",
        maxWidth: 240,
        paddingLeft: "5%",
        paddingTop: 3,
        marginLeft: "10%",
        marginBottom: "5%",
        marginTop: "6.5%",
        fontFamily: "SourceSerifPro"
    },
    imagenContainer: {
        height: 175
    },
    imagenStyle:{
        width: 125,
        height: "100%",
        borderRadius: 5
    }
})

export default styles