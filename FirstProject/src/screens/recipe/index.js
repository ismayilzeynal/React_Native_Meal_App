import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Recipe() {
    const route = useRoute();
    const { recipeId } = route.params;
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        searchContent();
    }, []);

    const searchContent = async () => {
        try {
            const response = await fetch(`${url}${recipeId}`);
    
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
    
            const responseJSON = await response.json();
    
            if (responseJSON && responseJSON.meals && responseJSON.meals.length > 0) {
                const newIngredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = responseJSON.meals[0][`strIngredient${i}`];
                    const measure = responseJSON.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        newIngredients.push(`${measure} ${ingredient}`);
                    } else if (ingredient || measure) {
                        // Handle cases where either ingredient or measure is null, but not both
                        const validIngredient = ingredient || '';
                        const validMeasure = measure || '';
                        newIngredients.push(`${validMeasure} ${validIngredient}`);
                    }
                }
                setIngredients(newIngredients);
            } else {
                console.error('No data found for the given recipe ID.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.fullCenter}>Ingredients:</Text>
            <FlatList
                data={ingredients}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.ingredient}>{item}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    fullCenter:{
        width: "100%",
        textAlign: "center",
        color: "black",
        fontSize: 30,
        fontWeight: "700"
    },

    ingredient: {
        fontSize: 16,
        marginBottom: 8,
        color: "#272D2F"
    },
});

export default Recipe;
