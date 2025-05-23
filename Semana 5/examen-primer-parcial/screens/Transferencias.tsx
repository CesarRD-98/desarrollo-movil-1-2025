import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useBanco } from '../providers/BancoProvider'

export default function Transferencias() {

    const [numeroCuenta, setNumeroCuenta] = useState<string>('')
    const [monto, setMonto] = useState<string>('')
    const [nombreDestinatario, setNombreDestinatario] = useState<string>('')

    const { transferirSaldo } = useBanco()

    return (
        <View style={styles.container}>
            <Text style={styles.dialogo}>Bienvenido a la aplicación de tu Banco Favorito</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese número de cuenta'
                value={numeroCuenta}
                onChangeText={setNumeroCuenta}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese el monto'
                value={monto}
                onChangeText={setMonto}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingrese nombre del destinatario'
                value={nombreDestinatario}
                onChangeText={setNombreDestinatario}
            />
            <View style={styles.container}>
                <Button title='Transferir saldo' onPress={() => {
                    transferirSaldo(Number(monto))
                    setMonto('')
                    setNumeroCuenta('')
                    setNombreDestinatario('')
                    Alert.alert('Acción', `Transferencia exitosa al destinatario ${nombreDestinatario} con el monto de L.${monto}`)
                }}/>
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
        color: '#00598a'
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
    },
    input: {
        backgroundColor: '#fafafa',
        borderRadius: 4,
        height: 40,
        marginHorizontal: 6,
        marginBottom: 8,
        textAlign: 'center',
        fontSize: 16,
        borderColor: '#016630',
        borderWidth: 1
    }
});