import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, View, Text, Pressable, TextInput, FlatList } from 'react-native';

export default function Texto(props) {
    return <Text style={[styles.texto, props.style]}>{props.text}</Text>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontFamily: "FiraSans-Medium"
    }
});
