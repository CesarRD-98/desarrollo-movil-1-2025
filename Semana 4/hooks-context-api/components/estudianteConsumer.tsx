import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useEstudianteContext } from '../provider/estudianteProvider'

export default function EstudianteConsumer() {

    const { estudiantes } = useEstudianteContext()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Estudiantes</Text>
            <FlatList
                data={estudiantes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.nombre}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    item: {
        fontSize: 18,
        backgroundColor: '#rgb(206, 229, 230)',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
});
