import { StyleSheet, Text, View, Image } from 'react-native';
import Texto from './texto';

const Film = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.container}>

                    <View style={styles.leftBox}>
                        <Image source={{ uri: props.img }}
                            style={styles.cover} />
                    </View>
                    <View style={styles.rightBox}>

                        <Texto style={styles.h1} text={props.titre} />
                        <Texto style={styles.p} text={props.des} />
                        <View style={styles.container}>
                            <Texto style={styles.date} text={props.release_date} />
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
        marginBottom: 20
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    cover: {
        width: 80,
        height: 150,
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
    date: {
        margin: 5,
        fontSize: 14,
        fontWeight: "bold",
    },
    p: {
        fontWeight: "400",
        marginLeft: 3
    }
});

export default Film;