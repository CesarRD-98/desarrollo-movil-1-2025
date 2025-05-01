import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ResultadoTiempo } from './interfaces/resultadoTiempo';
import { Calificacion } from './interfaces/calificacion';

export default function App() {

  //El número de días a la semana (7 días )
  const diasDeSemana: number = 7;

  //El número de días de entrenamiento
  let diasDeEntrenamiento: number = 0;

  //El tiempo promedio calculado (En base a las horas de entrenamiento a la semana)
  let tiempoPromedio: number = 0;

  //Valor booleano que describe si se alcanzó el objetivo
  let objetivoAlcanzado: boolean = false;



  function calculateExercises(registroEntrenamiento: number[], valorObjetivo: number): ResultadoTiempo {

    let sumaHoras: number = 0;

    registroEntrenamiento.forEach(registro => {
      if (registro > 0) {
        sumaHoras += registro;
        diasDeEntrenamiento++;
      }
    });

    // console.log("dias entrenados: "+diasDeEntrenamiento);
    // console.log("Total de horas entrenadas a la semana: "+sumaHoras);

    // promedio de horas entrenadas a la semana
    tiempoPromedio = sumaHoras / diasDeEntrenamiento;

    // si los dias de entrenamiento son mayores o iguales al valor objetivo, se considera que se ha alcanzado el objetivo
    if (diasDeEntrenamiento >= valorObjetivo) {
      objetivoAlcanzado = true;
    } else {
      objetivoAlcanzado = false;
    }

    // si los dias de entrenamiento son mayores o iguales al valor objetivo, se asigna la calificaicion 3
    // si los dias de entrenamiento son mayores o iguales a la mitad del valor objetivo, se asigna la calificacion 2
    // de lo contrario, se asigna la calificacion 1
    let descripcion: Calificacion;

    if (diasDeEntrenamiento >= valorObjetivo) {
      descripcion = { calificacion: 3, explicacion: "Se cumplió el objetivo de entrenamiento" };
    } else if (diasDeEntrenamiento >= valorObjetivo / 2) {
      descripcion = { calificacion: 2, explicacion: "Se cumplió parcialmente el objetivo de entrenamiento" };
    } else {
      descripcion = { calificacion: 1, explicacion: "No se cumplió el objetivo de entrenamiento" };
    }

    // json con el resultado final
    return {
      periodLength: diasDeSemana,
      trainingDays: diasDeEntrenamiento,
      success: objetivoAlcanzado,
      rating: descripcion.calificacion,
      ratingDescription: descripcion.explicacion,
      target: valorObjetivo,
      averageTime: tiempoPromedio
    };
  }



  const arrayEntrenamiento: number[] = [1, 0, 1, 0, 1, 0, 1];
  const valueObjetivo: number = 3;

  // se llama a la funcion calculateExercises con un array de horas entrenadas a diario y el valor objetivo
  const resultado: ResultadoTiempo = calculateExercises(arrayEntrenamiento, valueObjetivo);

  let success: string = resultado.success ? "Si" : "No";

  return (
    <View style={styles.container}>
      <Text style={styles.tittle1}>Calculadora de ejercicios</Text>
      <Text style={styles.tittle2}>Resultados del entrenamiento:</Text>
      <Text>Dias de la semana: {resultado.periodLength} dias</Text>
      <Text>Objetivo: {resultado.target} dias</Text>
      <Text>Dias entrenados a la semana: {resultado.trainingDays} dias</Text>
      <Text>objetivo alcanzado: {success}</Text>
      <Text>Promedio de horas entrenadas: {resultado.averageTime.toFixed(1)} hora</Text>
      <Text>Calificacion de entrenamiento: {resultado.rating} de 3</Text>
      <Text style={{ fontWeight: 'bold' }}>Descripcion:</Text>
      <Text>{resultado.ratingDescription}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tittle1: {
    color: 'purple',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tittle2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
