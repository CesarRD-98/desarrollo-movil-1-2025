import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useBanco } from '../providers/BancoProvider';

export default function Historico() {

    const { tipoTransaccion } = useBanco()
    return (
        <View>
            <Text style={styles.dialogo}>Historial de transacciones</Text>
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