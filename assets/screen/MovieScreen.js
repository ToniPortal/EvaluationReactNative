import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, View, Text, Pressable, TextInput, FlatList } from 'react-native';
import Film from '../components/film';

export default function HomeScreen() {
    const [json, setJson] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const f = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=08a341931ab5f5dcee467baeb4a68c76`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!f.ok) {
                    console.warn(`Erreur HTTP ! Status: ${f.status}`);
                    return Alert.alert("Erreur HTTP");
                } else {
                    const jsone = await f.json();
                    setJson(jsone.results);
                }
            } catch (e) {
                console.warn(e)
                Alert.alert("Une erreur est survenue")
            }
        }
        fetchData();
    }, [])

    return (
        <View style={styles.views}>
            {json == false ? (
                <View>
                    <Text>Récuperation des film populaire en cours...</Text>
                </View>
            ) : (
                <FlatList
                    data={json}
                    renderItem={({ item }) => <Film img={"https://image.tmdb.org/t/p/w500" + item.poster_path} titre={item.title} des={item.overview} release_date={item.release_date} />}
                    keyExtractor={(item) => item.id.toString()} // Assuming item.id is a number
                />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    views: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
