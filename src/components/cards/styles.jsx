import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    renderItemStyle:{
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: colors.black
    },
    itemStyle:{
        borderColor: colors.white,
        borderWidth: 2,
        borderRadius: 10,
        color: colors.white,
        height: 25,
        width: "auto",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 2,
        marginLeft: 25,
        marginBottom: 5,
        marginTop: 10,
        fontFamily: "SourceSerifPro"
    },
    imagenStyle:{
        width: 125,
        height: 125,
        borderRadius: 5
    }
})

export default styles