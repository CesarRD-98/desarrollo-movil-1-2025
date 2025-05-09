import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Estudiante } from '../models/estudiantes';

export default function EstudianteComponent() {

    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

    useEffect(() => {
        setEstudiantes([
            { id: 1, name: 'Juan' },
            { id: 2, name: 'Maria' },
            { id: 3, name: 'Pedro' },
            { id: 4, name: 'Ana' },
            { id: 5, name: 'Luis' },
            { id: 6, name: 'Laura' },
            { id: 7, name: 'Carlos' },
            { id: 8, name: 'Sofia' },
            { id: 9, name: 'Javier' },
            { id: 10, name: 'Isabel' }
        ]);
    }, []);


    const agregarEstudiante = () => {
        const nuevoEstudiante = { id: estudiantes.length + 1, name: `Estudiante ${estudiantes.length + 1}` };
        setEstudiantes([...estudiantes, nuevoEstudiante]);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 30 }}>Listado de Estudiantes</Text>
            <Button title="Agregar Estudiante" onPress={agregarEstudiante} />
            <FlatList
                data={estudiantes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        backgroundColor: '#rgb(226, 226, 226)',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 18
    }
});