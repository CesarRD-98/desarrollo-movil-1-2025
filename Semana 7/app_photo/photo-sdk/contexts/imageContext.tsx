import { createContext } from "react";
import * as ImagePicker from 'expo-image-picker';

export const ImageContext = createContext({
    imgPicker: null as ImagePicker.ImagePickerAsset | null,
    cargarImg: null as string | null,
    elegirImagen: async () => {},
    tomarImagen: async () => {},
    enviarImagen: async () => {},
    obtenerImagen: async (id: number) => {},
    cancelarSeleccion: () => {}
})