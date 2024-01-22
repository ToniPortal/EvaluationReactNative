import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, View, Text, Pressable, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Bienvenue from '../components/bienvenue';

export default function HomeScreen() {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("Bonjour a tous !");
    const [activate, setActivate] = useState(false);
    const [textInput, onChangeTextInput] = React.useState("Bonjour a tous!");


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const changeText = () => {
        setActivate(true);
    }

    const changeTextOk = async () => {
        setActivate(false);
        setText(textInput)
    }

    return (
        <View style={styles.viewImage}>
            {!image && <Button title="Pick an image for avatar" onPress={pickImage} />}
            {image && <Pressable onPress={pickImage}><Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} /></Pressable>}
            {activate == false ? (
                <View>
                    <Pressable onPress={changeText}><Bienvenue text={text} /></Pressable>
                </View>
            ) : (
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTextInput}
                        value={textInput}
                    />
                    <Button title="Ok" onPress={changeTextOk} />
                </View>
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
    viewImage: {
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
