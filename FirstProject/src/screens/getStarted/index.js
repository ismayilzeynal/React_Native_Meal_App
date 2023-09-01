import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

function GetStarted() {
    return (
        <SafeAreaView style={styles.landing}>

            <View style={styles.landingTop}>
                <Image
                    style={styles.landingAvatar}
                    source={require('../../assets/images/landingAvatar.png')}
                />
            </View>

            <View style={styles.landingMid}>
                <Text style={styles.landingTitle}>
                    Make your {'\n'} favorite recipes
                </Text>
                <View style={styles.separator}></View>
                <Text style={styles.landingDescription}>
                    Just tell us what ingredients do {'\n'} you have and we will show you {'\n'} what can you make.
                </Text>
            </View>


            <View style={styles.landingBottom}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default GetStarted;


const styles = StyleSheet.create({
    landing: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#FE724C'
    },

    landingTop: {
        width: (Dimensions.get('window').width),
        display: "flex",
        alignItems: "center",
        paddingTop: 30
    },

    landingAvatar: {
        width: 228,
        height: 364
    },

    landingMid: {
        width: (Dimensions.get('window').width) * 0.85,
        display: "flex",
        alignItems: "center"
    },

    landingTitle: {
        fontSize: 45,
        fontWeight: "700",
        color: "#FFF",
        textAlign: "center"
    },

    landingDescription: {
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 20,
        color: "#FFF",
        textAlign: "center",
        marginTop: 11
    },

    separator: {
        height: 2,
        width: (Dimensions.get('window').width) * 0.70,
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 12
    },

    landingBottom: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    submitButton: {
        width: (Dimensions.get('window').width) * 0.75,
        backgroundColor: "#272D2F",
        borderRadius: 30,
        paddingLeft: 57,
        paddingRight: 57,
        paddingBottom: 17,
        paddingTop: 17,
        display: "flex",
        alignItems: "center",
        marginBottom: 30,

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.52)',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 34,
            },
            android: {
                elevation: 8,
            },
        }),
    },

    submitButtonText: {
        fontSize: 19,
        fontWeight: "bold",
        color: "white"
    },
});