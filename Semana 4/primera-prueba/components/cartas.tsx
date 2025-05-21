import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Cartas() {

    const Cartas1 = Array(4).keys()
    const Cartas2 = Array(4).keys()

    const [partidas, setPartidas] = useState<number>(0)

    const [cartas, setCartas] = useState([...Cartas1, ...Cartas2].sort(() => Math.random() - 0.5));
    const [seleccionadas, setSeleccionadas] = useState<number[]>([]);


    // function sumarPartidas() {
    //     setPartidas(partidas + 1)
    // }

    const manejarSeleccion = (index: number) => {
        if (seleccionadas.length === 2) {
            return;
        }

        setSeleccionadas([...seleccionadas, index]);

        if (seleccionadas.length === 1) {
            const primeraCarta = cartas[seleccionadas[0]];
            const segundaCarta = cartas[index];

            setTimeout(() => {
                if (primeraCarta === segundaCarta) {
                    Alert.alert('¡Ganaste!', 'Has encontrado un par.');
                    setPartidas(partidas + 1)
                } else {
                    Alert.alert('¡Perdiste!', 'Inténtalo nuevamente.');
                }
                setSeleccionadas([]);
            }, 500);
        }
    };

    return (
        <>
        <View style={styles.container}>
            {cartas.map((valor, index) => (
                <TouchableOpacity key={index} style={styles.carta} onPress={() => manejarSeleccion(index)}>
                    <Text style={styles.texto}>{seleccionadas.includes(index) ? valor : '?'}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <Text>Partidas ganadas: {partidas}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 20,
    },
    carta: {
        width: 70,
        height: 70,
        backgroundColor: '#3498db',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    texto: {
        fontSize: 30,
        color: '#fff',
    },
});
