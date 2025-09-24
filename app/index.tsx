import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import {
    KeyboardAwareScrollView,
    KeyboardExtender
} from "react-native-keyboard-controller";

export default function KeyboardExtendExample() {

    return (
        <>
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <TextInput
                    placeholder="Donation amount"
                    placeholderTextColor="#5c5c5c"
                    style={styles.input}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder="Postal code"
                    placeholderTextColor="#5c5c5c"
                    style={styles.input}
                />
            </KeyboardAwareScrollView>
            <KeyboardExtender enabled>
                <View style={styles.keyboardExtend}>
                    <Text style={styles.priceText}>10$</Text>
                </View>
            </KeyboardExtender>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        width: "100%",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderColor: "#1c1c1c",
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    keyboardExtend: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    priceText: {
        fontSize: 18,
        fontWeight: "600",
        padding: 16,
    },
    lightKeyboardText: {
        color: "black",
    },
    darkKeyboardText: {
        color: "white",
    },
});