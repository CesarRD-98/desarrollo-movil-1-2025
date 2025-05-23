import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Historico() {
  return (
    <View>
      <Text style={styles.dialogo}>Historial de transacciones</Text>
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