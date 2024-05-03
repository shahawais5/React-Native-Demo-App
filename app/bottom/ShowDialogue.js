import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const DialogueScreen = () => {
    const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
            {
                show && (
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Text style={styles.title}>Custom Dialogue box Model</Text>
                            <Button title="Close Dialogue Box" onPress={() => setShow(false)} />
                        </View>
                    </View>
                )
            }
            <Button title="Open Dialogue Box" onPress={() => setShow(true)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 45
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        backgroundColor: 'white',
        height: 300,
        width: 300,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default DialogueScreen;
