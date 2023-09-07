import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import HeartIcon from '../assets/icons/heart.svg';
import SearchIcon from '../assets/icons/search.svg';

const categories = [
    {
        title: 'Name',
        key: 'name',
        url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    },
    {
        title: 'Category',
        key: 'category',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    },
    {
        title: 'Area',
        key: 'area',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
    },
    {
        title: 'Ingredient',
        key: 'ingredient',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    },
];

export const Header = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const searchContent = async () => {
        try {
            const response = await fetch(`${selectedCategory.url}${searchText}`);

            if (response.ok) {
                const reponseJSON = await response.json();

                if (reponseJSON && reponseJSON.meals && reponseJSON.meals.length > 0) {
                    onSearch(reponseJSON.meals);
                }
                else {
                    console.error('Empty input or There is no meal for input');
                }
            }
            else {
                console.error(`HTTP Error: ${response.status}`);
            }
        } 
        catch (error) {
            console.error('Error:', error);
        }
    };

    const renderCategoryButton = (item) => {
        let buttonStyle;
        let textStyle;
        if (selectedCategory.key === item.key) {
            buttonStyle = styles.selectedCategoryButton;
            textStyle = styles.selectedCategoryText;
        }
        else {
            buttonStyle = styles.categoryButton;
            textStyle = styles.categoryText;
        }


        return (
            <TouchableOpacity
                key={item.key}
                style={buttonStyle}
                onPress={() => {
                    console.log('Button pressed:', item.key);
                    setSelectedCategory(item);
                }}
            >
                <Text style={textStyle}>{item.title}</Text>
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.favourite}>
                    <HeartIcon />
                </View>

                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>
                        Here’s what {'\n'}you can make
                    </Text>
                </View>

                <View style={styles.searchInput}>
                    <SearchIcon style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInputArea}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={setSearchText}
                        onSubmitEditing={searchContent}
                    />
                </View>


                <ScrollView
                    horizontal
                    contentContainerStyle={styles.categories}
                    showsHorizontalScrollIndicator={false}
                >
                    {categories.map((item) => renderCategoryButton(item))}
                </ScrollView>

            </View>
        </View>
    );
}

// export default Header;






const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        display: "flex",
        backgroundColor: "#F2F2F2"
    },

    header: {
        alignSelf: "center",
        display: "flex",
        width: (Dimensions.get('window').width) * 0.95,
        alignItems: "center",
    },


    // favourite
    favourite: {
        display: "flex",
        paddingRight: 15,
        width: "100%",
        alignItems: "flex-end",
    },




    // Header title
    headerTitle: {
        display: "flex",
        paddingLeft: 15,
        width: "100%",
    },

    headerTitleText: {
        paddingTop: 35,
        fontSize: 34,
        fontWeight: "700",
        color: "#272D2F",
    },




    // Search
    searchInput: {
        width: ((Dimensions.get('window').width) - 30) * 0.95,
        height: 60,
        borderRadius: 20,
        backgroundColor: '#E6E6E6',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },

    searchIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 18
    },

    searchInputArea: {
        borderWidth: 1,
        flex: 1,
        borderColor: '#E6E6E6',
    },




    // categories
    categories: {
        paddingVertical: 20,
        paddingHorizontal: 24,
    },

    categoryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        width: 90,
        height: 30,
        backgroundColor: 'transparent',
    },

    selectedCategoryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        width: 90,
        height: 30,
        backgroundColor: '#FE724C',
    },

    categoryText: {
        fontSize: 17,
        alignSelf: 'center',
        color: '#9A9A9D',
        fontWeight: "600"
    },

    selectedCategoryText: {
        fontSize: 17,
        alignSelf: 'center',
        color: 'white',
        fontWeight: "600"
    },
















    // scrollView:{
    //     flexGrow: 1,
    //     alignItems: 'center',
    // }

});