import React, { useContext, useState } from 'react'
import { ChildrenModel } from '../models/childrenModel'
import * as ImagePicker from 'expo-image-picker';
import { ImageContext } from '../contexts/imageContext';
import axios from 'axios';
import { Alert } from 'react-native';

export default function ImageProvider({ children }: ChildrenModel) {

    const [imgPicker, setImgPicker] = useState<ImagePicker.ImagePickerAsset | null>(null)
    const [cargarImg, setCargarImg] = useState<string | null>(null)

    const url_api: string = 'http://192.168.0.5:5000'

    // funcion que permite elegir una imagen de la galeria - CesarRD
    async function elegirImagen() {
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        })

        // console.log(resultado);

        if (!resultado.canceled) {
            setImgPicker(resultado.assets[0])
        }
    }


    // funcion que permite tomar una imagen desde camara
    async function tomarImagen() {
        const permisos = await ImagePicker.requestCameraPermissionsAsync()
        if (!permisos.granted) {
            Alert.alert('Permiso denegado', 'Se necesita permiso para usar la cámara')
            return
        }

        const resultado = await ImagePicker.launchCameraAsync({
            quality: 1
        })

        if (!resultado.canceled) {
            setImgPicker(resultado.assets[0])
        }
    }

    // funcion que permite enviar la imagen a una base de datos . CesarRD
    async function enviarImagen() {

        if (!imgPicker) return;

        const formData = new FormData();
        formData.append('image', {
            uri: imgPicker.uri,
            name: imgPicker?.fileName,
            type: imgPicker?.mimeType
        } as any)

        try {
            const response = await axios.post(`${url_api}/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.status === 200) {
                Alert.alert('Exito', 'Imagen enviada con exito');
                setImgPicker(null)
            }
        } catch (error) {
            console.error('Error al enviar la imagen', error);
            Alert.alert('Error', 'Error al enviar la imagen');
        }
    }

    function cancelarSeleccion() {
        setImgPicker(null)
    }


    async function obtenerImagen(id: number) {
        try {
            const response = await axios.get(`${url_api}/image/${id}`, {
                validateStatus: (status) => status === 200 || status === 404
            });
            if (response.status === 200) {
                const path = response.data.pathImage
                setCargarImg(`${url_api}${path}`)
            }

            if (response.status === 404) {
                Alert.alert('Error', 'Imagen no encontrada');
                setCargarImg(null)
            }

        } catch (error) {
            console.log('Error al obtener la imagen', error);
            Alert.alert('Error', 'Error al obtener la imagen');
        }
    }


    return (
        <ImageContext.Provider value={{ imgPicker, cargarImg, elegirImagen, tomarImagen, enviarImagen, obtenerImagen, cancelarSeleccion }}>
            {children}
        </ImageContext.Provider>
    )
}

export function useImageContext() {
    return useContext(ImageContext)
}
