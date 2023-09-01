import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackIcon from "../icons/Back.svg"
import CardIcon from "../icons/CardIcon.svg"
import PhotoIcon from "../icons/PhotoIcon.svg"




function Home(){
    return (
        <>
            <View style={styles.nav}>
                <BackIcon style={styles.backButton} />
                <Text style={styles.navText}>Credit / Debit Card</Text>
            </View>


            <View style={styles.cardImageSec}>
                <ImageBackground
                    source={require('../assets/images/Card.png')}
                    style={styles.cardImage}
                >
                    <View>
                        <Text style={styles.cardImageNumber}>
                            4242  4242  4242  4242
                        </Text>
                    </View>
                    <View style={styles.cardImageTextArea}>
                        <Text style={styles.cardImageText}>
                            LESLEE HARRON
                        </Text>
                        <Text style={styles.cardImageText}>04/22</Text>
                    </View>
                </ImageBackground>
            </View>



            <View style={styles.cardInfoForm}>
                <PhotoIcon style={styles.photoIcon}/>

                <View style={styles.cardInfoInput}>
                    <Text style={styles.InputLabelText}>
                        Name on card
                    </Text>
                    <TextInput
                        style={styles.FullInput}
                        defaultValue={"Leslee Harron"}
                        placeholder="Enter your name"
                    />
                </View>

                <View style={styles.cardInfoInput}>
                    <Text style={styles.InputLabelText}>
                        Card number
                    </Text>
                    <TextInput
                        style={styles.FullInput}
                        defaultValue={"4242 4242 4242 4242"}
                        placeholder="Enter card number"
                    />
                </View>

                <View style={styles.cardInfoInputDivided}>
                    <View style={styles.halfWidthInput}>
                        <Text style={styles.InputLabelText}>
                            Expiry date
                        </Text>
                        <TextInput
                            style={styles.FullInput}
                            defaultValue={"04/22"}
                            placeholder="MM/YY"
                        />
                    </View>

                    <View style={styles.halfWidthInput}>
                        <Text style={styles.InputLabelText}>
                            CVC
                        </Text>
                        <View style={styles.inputWithIcon}>
                            <TextInput
                                style={styles.inputCVC}
                                defaultValue={"474"}
                                placeholder="000"
                            />
                            <CardIcon style={styles.cardInputIcon}/>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Use this card</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Home;


const styles = StyleSheet.create(
    {
        nav: {
            flex: 0.1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },

        backButton: {
            width: 42,
            height: 42
        },

        navText: {
            fontSize: 22,
            fontWeight: 'bold',
            color: "#07122A",
            marginLeft: 22
        },




        // Card Image section
        cardImageSec: {
            flex: 0.5,
            marginTop: 31,
            borderRadius: 8,
            overflow: 'hidden'
        },

        cardImage: {
            flex: 1,
            resizeMode: 'cover',
            display: "flex",
            flexDirection: "row",
            alignContent: "flex-end",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: 24
        },

        cardImageNumber: {
            fontSize: 26,
            fontWeight: "normal",
            color: "white",
            letterSpacing: 1,
            marginBottom: 45
        },

        cardImageText: {
            fontSize: 20,
            lineHeight: 20,
            fontWeight: "normal",
            color: "white"
        },

        cardImageTextArea: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },





        // Card Info
        cardInfoForm: {
            flex: 1,
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        },

        photoIcon: {
            width: 34,
            height: 29
        },

        cardInfoInput: {
            width: "100%",
            display: "flex",
            flexWrap: "wrap"
        },

        InputLabelText: {
            color: "#8698A8",
            fontSize: 14,
            lineHeight: 22
        },

        FullInput: {
            width: "100%",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#8698A8',
            padding: 10,
            fontSize: 17,
            fontWeight: "bold"
        },

        cardInfoInputDivided: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },

        halfWidthInput: {
            width: "47%",
        },

        cardInputIcon: {
            width: 31.5,
            height: 26

        },

        inputWithIcon: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#8698A8',
            borderRadius: 8,
            paddingHorizontal: 10,
        },

        inputCVC: {
            flex: 1,
            fontSize: 17,
            fontWeight: "bold"
        },

        submitButton: {
            width: "100%",
            backgroundColor: "#07122A",
            borderRadius: 8,
            padding: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20
        },
        submitButtonText: {
            fontSize: 17,
            fontWeight: "bold",
            color: "white"
        }






    });