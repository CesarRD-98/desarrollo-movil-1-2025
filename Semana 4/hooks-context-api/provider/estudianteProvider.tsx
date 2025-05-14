import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Estudiante } from '../models/estudianteModel'
import { EstudianteContext } from '../context/estudianteContext';

export default function EstudianteProvider({ children }: { children: ReactNode }) {

    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
        { id: 1, nombre: 'Estudiante Juan' },
        { id: 2, nombre: 'Estudiante Maria' },
        { id: 3, nombre: 'Estudiante Pedro' },
        { id: 4, nombre: 'Estudiante Ana' },
        { id: 5, nombre: 'Estudiante Luis' },
        { id: 6, nombre: 'Estudiante Laura' },
        { id: 7, nombre: 'Estudiante Carlos' },
        { id: 8, nombre: 'Estudiante Sofia' },
        { id: 9, nombre: 'Estudiante Javier' },
        { id: 10, nombre: 'Estudiante Isabel' }
    ])

    useEffect(() => {
        const tiempo = setInterval(() => {
            setEstudiantes((prevEstudiante) => {
                const nuevoEstudiante: Estudiante = { id: prevEstudiante.length + 1, nombre: `Estudiante ${prevEstudiante.length + 1}` }
                return [...prevEstudiante, nuevoEstudiante]
            });
        }, 5000);

        return () => clearInterval(tiempo);
    }, []);

    return (
        <EstudianteContext.Provider value={{ estudiantes }}>
            {children}
        </EstudianteContext.Provider>
    )
}

export function useEstudianteContext() {
    return useContext(EstudianteContext)
}
