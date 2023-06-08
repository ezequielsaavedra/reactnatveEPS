import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        borderBottomStyle: "solid",
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        width: "100%",
        flexDirection: "row"
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },
    modalText: {
        marginBottom: 10,
        marginTop: 10,
    },
});


export default styles