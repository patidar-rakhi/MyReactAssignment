import React from "react";
import { View, Text, StyleSheet } from "react-native";


type GreetingCardProps = {
    name: string;
    message: string;
};

function GreetingCard({ name, message }: GreetingCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        marginTop: 20
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    message: {
        fontSize: 16,
        color: "#555",
    },
});

export default GreetingCard;
