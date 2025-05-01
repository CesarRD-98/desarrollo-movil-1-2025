import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

//El número de días a la semana (7 días )
let diasDeSemana: number = 7;

//El número de días de entrenamiento
let diasDeEntrenamiento: number = 0;

//El valor objetivo original (cualquier numero definido por usted de 1 a 7)
let valorObjetivo: number = 4;

//El tiempo promedio calculado (En base a las horas de entrenamiento a la semana)
let tiempoPromedio: number = 0;

//Valor booleano que describe si se alcanzó el objetivo
let objetivoAlcanzado: boolean = false;

//Una calificación entre los números 1-3 que indica qué tan bien se cumplen las horas. Puedes decidir la métrica por su cuenta.
//Un valor de texto que explique la calificación, puedes inventar las explicaciones

interface Calificacion {
  calificacion: number;
  explicacion: string;
}

let calificaciones: Calificacion[] = [
  {
    calificacion: 1,
    explicacion: "No se cumplió el objetivo de entrenamiento",
  },
  {
    calificacion: 2,
    explicacion: "Se cumplió parcialmente el objetivo de entrenamiento",
  },
  {
    calificacion: 3,
    explicacion: "Se cumplió el objetivo de entrenamiento",
  },
]



//arreglo que contiene el registro de entrenamiento semanal
let registroEntrenamiento: number[] = [1, 0, 2, 0, 0, 1, 2];

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



let calificacionFinal: number;
let explicacionFinal: string;

// si los dias de entrenamiento son mayores o iguales al valor objetivo, se asigna la calificaicion 3
// si los dias de entrenamiento son mayores o iguales a la mitad del valor objetivo, se asigna la calificacion 2
// de lo contrario, se asigna la calificacion 1

if (diasDeEntrenamiento >= valorObjetivo) {
  calificacionFinal = calificaciones[2].calificacion;
  explicacionFinal = calificaciones[2].explicacion;
} else if (diasDeEntrenamiento >= valorObjetivo / 2) {
  calificacionFinal = calificaciones[1].calificacion;
  explicacionFinal = calificaciones[1].explicacion;
} else {
  calificacionFinal = calificaciones[0].calificacion;
  explicacionFinal = calificaciones[0].explicacion;
}



// json que contiene el resultado final
let resultado = {
  periodoLength: diasDeSemana,
  trainingDays: diasDeEntrenamiento,
  success: objetivoAlcanzado,
  rating: calificacionFinal,
  ratingDescription: explicacionFinal,
  target: valorObjetivo,
  averageTime: tiempoPromedio
}

let success: string = resultado.success ? "Si" : "No";

console.log(resultado);


  return (
    <View style={styles.container}>
      <Text style={styles.tittle1}>Calculadora de ejercicios</Text>
      <Text style={styles.tittle2}>Resultados del entrenamiento:</Text>
      <Text>Dias de la semana: {resultado.periodoLength} dias</Text>
      <Text>Dias entrenados a la semana: {resultado.trainingDays} dias</Text>
      <Text>objetivo alcanzado: {success}</Text>
      <Text>Calificacion de entrenamiento: {resultado.rating} de 3</Text>
      <Text style={{fontWeight: 'bold'}}>Descripcion:</Text>
      <Text>{resultado.ratingDescription}</Text>
      <Text>Objetivo: {resultado.target} dias</Text>
      <Text>Promedio de horas entrenadas: {resultado.averageTime.toFixed(1)} hora</Text>
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
