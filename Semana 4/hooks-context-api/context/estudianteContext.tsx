import { createContext } from "react";
import { Estudiante } from "../models/estudianteModel";

export const EstudianteContext = createContext({
    estudiantes: {} as Estudiante[]
})