import { View, Text } from 'react-native'
import React from 'react'
import { Calculadora } from '../interfaces/calculadora'

export default function CalculatorComponent(props: Calculadora) {

    let resultado: number = 0;
    let operacion: string = '';

    switch (props.operacion) {
        case 1:
            // Sumar
            resultado = props.num1 + props.num2;
            operacion = 'Suma';       
            break;
        case 2:
            // Restar
            resultado = props.num1 - props.num2;
            operacion = 'Resta';
            break;
        case 3:
            // Multiplicar
            resultado = props.num1 * props.num2;
            operacion = 'Multiplicación';
            break;
        case 4:
            // Dividir
            if (props.num2 > 0) {
                resultado = props.num1 / props.num2;
            } else {
                resultado = 0;
            }
            operacion = 'División';
            break;
        default:
            break;
    }


  return (
    <View>
      <Text>Primer numero: {props.num1}</Text>
      <Text>Segundo numero: {props.num2}</Text>
      <Text>Operación: {operacion}</Text>
      <Text>Resultado: {resultado}</Text>
    </View>
  )
}