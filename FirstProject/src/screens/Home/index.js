import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { Header } from '../../components/Header';
import Meal from '../../components/Meal';

function Home() {
    const [searchData, setSearchData] = useState([]);

    const onSearch = data => {
        setSearchData(data);
    };

    return (
        <View style={styles.container}>
            <Header onSearch={onSearch} />
            
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.countFound}>{searchData.length} Meal found</Text>

                {searchData.map((item) => (
                    <Meal style={styles.MealItm} key={item.idMeal} item={item} />
                ))}
            </ScrollView>
        </View>
    );
};


export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        display: "flex",
        justifyContent: "space-between"
    },

    scrollViewContent: {
        width: (Dimensions.get('window').width) * 0.95,
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    countFound:{
        width: "100%",
        textAlign: 'center',
        color: "#272D2F",
        fontSize: 24,
        fontWeight: "500",
        marginTop: 15,
        marginBottom: 10
    }
});
