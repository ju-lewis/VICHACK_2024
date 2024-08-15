import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
    title: {
        color: Colors.light.text,
        fontSize: 24,
        marginBottom: 10,
    },
    logInContainer: {
        width: '80%',
        height: 400,
        marginHorizontal: 'auto',
        marginVertical: 'auto',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: Colors.light.backgroundFade,
        borderRadius: 12,
        shadowColor: "#001",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 4,
    },
    label: {
        marginTop: 4,
        marginBottom: 8,
        marginHorizontal: 12
    },
    textInput: {
        width: '90%',
        marginBottom: 22,
        padding: 8,
        backgroundColor: Colors.light.backgroundInput,
        marginHorizontal: 'auto',
        borderRadius: 4,
        borderColor: Colors.light.borderInput,
        borderWidth: 1,
    },
    button: {
        width: '90%',
        marginHorizontal: 'auto',
        backgroundColor: '#6b79b5',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;
