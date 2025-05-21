import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useJuegoContext } from '../Provider/JuegosProvider'

export default function CantidadPartidas() {

    const {cantidadPartidas} = useJuegoContext()  

  return (
    <FlatList
            data={cantidadPartidas}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardText2}>Partida #{item.id}</Text>
                <Text style={styles.cardSubText}>
                  Resultado: {item.descripcion}
                </Text>
              </View>
            )}
          />
  )
}

const { width } = Dimensions.get("window");
const cardWidth = width / 4 - 16; // Ajusta 4 columnas con márgenes

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
    height: cardWidth * 1.3, // proporcional
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#9e9e9e",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  cardText: {
    fontSize: cardWidth / 2.5, // proporcional
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