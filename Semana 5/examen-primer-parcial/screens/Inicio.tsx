import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text style={styles.dialogo}>Bienvenido a la aplicación de tu Banco Favorito</Text>
            <View style={styles.container2}>
                <Text style={styles.title}>Saldo Actual:</Text>
                <Text style={{fontSize: 18}}>L.0.00</Text>
            </View>
            <View style={styles.container}>
                <Button title='Depositar saldo' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        padding: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 8,
        textAlign: 'center',
        color: '#000'
    },
    card: {
        padding: 8,
        backgroundColor: '#fff',
        margin: 6,
        borderRadius: 4
    },
    dialogo: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#008236',
        textAlign: 'center',
        paddingVertical: 10,
        margin: 10,
        color: '#fff'
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#fff'
    }
});