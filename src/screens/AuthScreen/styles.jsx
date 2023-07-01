import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.backgroundApp,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 75,
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 10,
        width: "90%"
    },
    inputContainer: {
        width:"100%",
        borderColor: colors.yellowText,
        borderWidth: 1,
        borderRadius: 10,   
        margin: "4%",
        height: 40,
        padding: 10,
        color: colors.yellowText
    },
    button: {
        backgroundColor: "#F9A924",
        width: "50%",
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: "4%"
    },
    footer: {
        flexDirection: "row",
    },
    title: {
        color: colors.yellowText,
        marginBottom: 50,
        fontSize: 35
    }
});

export default styles