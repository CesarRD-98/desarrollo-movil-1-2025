import { View, Text, StyleSheet, Button, Alert, FlatList } from 'react-native'
import React from 'react'
import { useBanco } from '../providers/BancoProvider';

export default function Inicio() {

    const { saldo, depositarSaldo, tipoTransaccion } = useBanco()
    return (
        <View style={styles.container}>
            <Text style={styles.dialogo}>Bienvenido a la aplicación de tu Banco Favorito</Text>
            <View style={styles.container2}>
                <Text style={styles.title}>Saldo Actual:</Text>
                <Text style={{ fontSize: 18, marginBottom: 14 }}>L.{saldo}</Text>
                <Button title='Depositar saldo' onPress={() => {
                    Alert.alert('Acción', 'Se ha realizado un deposito exitosamente')
                    depositarSaldo()
                }}/>
            </View>
            <FlatList
                    data={tipoTransaccion}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 18
                            }}>{item.descripcion}</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                marginBottom: 4,
                                fontSize: 14
                            }}>L.{item.saldo}</Text>
                        </View>
                    )}
                />
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