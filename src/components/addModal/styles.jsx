import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: 35,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: colors.black,
        padding: 30,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 8
    },
    buttonClose: {
        position: "absolute",
        alignSelf: "flex-end",
        padding: 10
    }
});


export default styles