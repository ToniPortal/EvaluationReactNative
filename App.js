import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import BottomTab from './assets/navigator';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'FiraSans-Medium': require('./assets/fonts/FiraSans-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#001f3f"
        style="light"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
