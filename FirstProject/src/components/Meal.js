import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeartLow from '../assets/icons/heartLow.svg';
import HeartLowRed from '../assets/icons/heartLowRed.svg';
import { useNavigation } from '@react-navigation/native';


const Meal = ({ item }) => {
    const navigation = useNavigation();

    const goToRecipe = (id) => {
        navigation.push('Recipe', { recipeId: id });
    };

    return (
        <View key={item.idMeal} style={styles.mealItem}>
            <View style={styles.mealCard}>
                <Image
                    style={styles.mealImage}
                    source={{ uri: item.strMealThumb }} />
                <TouchableOpacity style={styles.likeBtn}>
                    <HeartLow style={styles.heartIcn} />
                </TouchableOpacity>
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
                <TouchableOpacity style={styles.mealRecipeParent} onPress={() => goToRecipe(item.idMeal)}>
                    <Text style={styles.mealRecipe}>View recipe  {'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Meal;





const styles = StyleSheet.create({
    mealItem: {
        width: "47%",
        display: "flex",
        alignItems: "center",
        marginBottom: 15,
    },

    mealCard: {
        backgroundColor: "#FFF",
        borderRadius: 25,
        width: "90%",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 12
    },


    mealImage: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 10,
        borderRadius: 20
    },

    likeBtn: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start"
    },




    mealTitle: {
        fontSize: 18,
        color: "#272D2F",
        fontWeight: "300",
        alignSelf: "center",
        marginTop: 10
    },

    mealRecipeParent: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },

    mealRecipe: {
        marginTop: 30,
        color: "#272D2F",
        fontSize: 13,
        fontWeight: "700",
    },



});
