import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Estudiante } from '../models/estudianteModel'
import { EstudianteContext } from '../context/estudianteContext';

export default function EstudianteProvider({ children }: { children: ReactNode }) {

    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Maria' },
        { id: 3, nombre: 'Pedro' },
        { id: 4, nombre: 'Ana' },
        { id: 5, nombre: 'Luis' },
        { id: 6, nombre: 'Laura' },
        { id: 7, nombre: 'Carlos' },
        { id: 8, nombre: 'Sofia' },
        { id: 9, nombre: 'Javier' },
        { id: 10, nombre: 'Isabel' }
    ])

    useEffect(() => {
        const timer = setInterval(() => {
            setEstudiantes((prevEstudiante) => {
                const nuevoEstudiante: Estudiante = { id: prevEstudiante.length + 1, nombre: `Estudiante ${prevEstudiante.length + 1}` }
                return [...prevEstudiante, nuevoEstudiante]
            });
        }, 5000);

        return () => clearInterval(timer);
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
