import { StyleSheet, Text, View,Image } from 'react-native';
import Texto from './texto';

const Flag = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.container}>

                    <View style={styles.leftBox}>
                        <Image source={{ uri: props.img }}
                            style={styles.cover} />
                    </View>
                    <View style={styles.rightBox}>

                        <Texto style={styles.h1} text={props.name} />
                        <View style={styles.container}>
                            <Texto style={styles.population} text={"Population : " + props.population} />
                        </View>


                    </View>
                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 300,
        backgroundColor: "gray",
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 15
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    cover: {
        width: 70,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
    },
    leftBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    rightBox: {
        flex: 4,
        alignItems: 'right',
        marginLeft: 20,
        marginTop: 10
    },
    h1: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 4,
        marginBottom: 2
    },
    population: {
        margin: 5,
        fontSize: 14,
        fontWeight: "bold",
    },
    p: {
        fontWeight: "400",
        marginLeft: 3
    }
});

export default Flag;