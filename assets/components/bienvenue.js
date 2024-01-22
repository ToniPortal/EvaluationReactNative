import { StyleSheet, Text, View } from 'react-native';
import Texto from './texto';

export default function Bienvenue(props) {
    return <Texto style={styles.paragraph} text={props.text} />

}

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 18
    },
});
