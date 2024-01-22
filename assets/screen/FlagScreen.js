import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, View, Text, Pressable, TextInput, FlatList } from 'react-native';
import Flag from '../components/flag';

export default function HomeScreen() {
    const [json, setJson] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const f = await fetch(`https://restcountries.com/v2/all`, {
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
                    console.log(jsone[0].flags.png)
                    setJson(jsone);
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
                    <Text>Récuperation des drapeaux en cours...</Text>
                </View>
            ) : (
                <FlatList
                    data={json}
                    renderItem={({ item }) => <Flag img={item.flags.png} name={item.name} population={item.population} />}
                    keyExtractor={(item) => item.alpha3Code} // Assuming item.id is a number
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
