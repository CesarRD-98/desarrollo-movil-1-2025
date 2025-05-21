import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native'
import React from 'react'
import { useJuegoContext } from '../Provider/JuegosProvider'
import CantidadPartidas from '../components/CantidadPartidas';

export default function Juego() {

  const { sumarPartida, cartas } = useJuegoContext();
  let cartasSeleccionadas = [] as number[];

  function seleccionarCarta(item: number) {
    cartasSeleccionadas.push(item)

    if (cartasSeleccionadas.length == 2) {
      if (cartasSeleccionadas[0] === cartasSeleccionadas[1]) {
        Alert.alert('"Gano la partida"')
        console.log("Gano la partida")
        sumarPartida({ id: cartasSeleccionadas[0], descripcion: 'Partida Ganada' })
      }
      else {
        Alert.alert('Partida Finalizada')
        console.log("Partida finalizada")
        sumarPartida({ id: cartasSeleccionadas[0], descripcion: 'Partida Perdida' })
      }
    }
  }

  return (
    <View>
      
      <FlatList
        data={cartas}
        keyExtractor={(_, i) => i.toString()}
        numColumns={4}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => seleccionarCarta(item)}>
            <Text style={styles.cardText}>S</Text>
          </TouchableOpacity>
        )}
      />

      <CantidadPartidas></CantidadPartidas>

    </View>
  )
}

const { width } = Dimensions.get("window");
const cardWidth = width / 4 - 16;

const styles = StyleSheet.create({
  grid: {
    alignItems: "center",
    marginTop: 24,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    width: cardWidth,
    height: cardWidth * 1.3,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#9e9e9e",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  cardText: {
    fontSize: cardWidth / 2.5,
    color: "#fff",
  },
  listContainer: {
    paddingBottom: 24,
  },
  cardText2: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSubText: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});