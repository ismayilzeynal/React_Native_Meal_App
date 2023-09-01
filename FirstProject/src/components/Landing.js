import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";


function Landing() {
    return (
        <View style={styles.landing}>
            <View style={styles.landingTop}>
                <Image
                    style={styles.landingAvatar}
                    source={require('../assets/images/landingAvatar.png')}
                />
                <Text style={styles.landingTitle}>
                    Hey Leslee,{'\n'} there’s a new course about{'\n'} Figma
                </Text>
                <Text style={styles.landingDescription}>
                    Find out how our new matching tool can help you learn another way
                </Text>
            </View>

            <View style={styles.landingBottom}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Discover the course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.LowOpacityNoBg}>
                    <Text style={styles.LowOpacityButtonText}>Not now</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default Landing;


const styles = StyleSheet.create({
    landing: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 24,
        marginBottom: 30, // clean
        paddingLeft: 32,
        paddingRight: 32
    },

    landingTop: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },

    landingAvatar: {
        width: 278,
        height: 376
    },

    landingTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#07122A",
        textAlign: "center"
    },
    landingDescription: {
        fontSize: 16,
        fontWeight: "300",
        lineHeight: 20,
        color: "#4F4F4F",
        textAlign: "center",
        marginTop: 11
    },

    landingBottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    submitButton: {
        width: "100%",
        backgroundColor: "#07122A",
        borderRadius: 8,
        paddingLeft: 57,
        paddingRight: 57,
        paddingBottom: 17,
        paddingTop: 17,
        display: "flex",
        alignItems: "center",
        marginBottom: 30
    },
    submitButtonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white"
    },
    LowOpacityNoBg:{
        display: "flex",
        alignItems: "center"
    },
    LowOpacityButtonText:{
        color: "#BDBDBD",
        fontSize: 15,
        fontWeight: "500",
    }











});