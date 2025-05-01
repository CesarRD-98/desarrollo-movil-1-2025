import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

//El número de días a la semana (7 días )
let diasDeSemana: number = 7;

//El número de días de entrenamiento
let diasDeEntrenamiento: number = 5;

//El valor objetivo original (cualquier numero definido por usted de 1 a 7)
let valorObjetivo: number = 6;

//El tiempo promedio calculado (En base a las horas de entrenamiento a la semana)
let tiempoPromedio: number;

//Valor booleano que describe si se alcanzó el objetivo
let objetivoAlcanzado: boolean = false;

//Una calificación entre los números 1-3 que indica qué tan bien se cumplen las horas. Puedes decidir la métrica por su cuenta.
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


// for (const item of calificaciones) {
//   console.log(item); 
// }

//Un valor de texto que explique la calificación, puedes inventar las explicaciones



let registroEntrenamiento: number[] = [1,1.5, 1.5, 2, 1, 1, 0.5];
let sumaHoras: number = 0;

for (let i = 0; i < registroEntrenamiento.length; i++) {
  sumaHoras += registroEntrenamiento[i];
}

tiempoPromedio = sumaHoras / registroEntrenamiento.length;




let calificacionFinal: number;
let explicacionFinal: string;

if (sumaHoras >= 9) {
  calificacionFinal = calificaciones[2].calificacion;
  explicacionFinal = calificaciones[2].explicacion;
} else if (sumaHoras >= 5) {
  calificacionFinal = calificaciones[1].calificacion;
  explicacionFinal = calificaciones[1].explicacion;
} else {
  calificacionFinal = calificaciones[0].calificacion;
  explicacionFinal = calificaciones[0].explicacion;
}

let resultado = {
  diasDeSemana: diasDeSemana,
  diasEntrenados: diasDeEntrenamiento,
  success: objetivoAlcanzado,
  calificacion: calificacionFinal,
  explicacion: explicacionFinal,
  valorObjetivo: valorObjetivo,
  tiempoPromedio: tiempoPromedio
}

console.log(resultado);

  return (
    <View style={styles.container}>
      <Text>Desarrollo Móvil 1</Text>
      <Text>{"Horas entrenadas: "+registroEntrenamiento.length+" dias"}</Text>
      <Text>{"Objetivo de dias de entrenamiento: "+valorObjetivo}</Text>
      <Text>{"Calificacion: "+calificacionFinal}</Text>
      <Text>{"Detalles de calificacion:"}</Text>
      <Text>{explicacionFinal}</Text>
      <Text>{}</Text>
      <Text>{"Horas promedio entrenadas a la semana: " + tiempoPromedio.toFixed(2) + " horas"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
