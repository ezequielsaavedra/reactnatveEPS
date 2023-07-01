import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { addAvatar, deleteAvatar } from '../../store/actions/avatar.action';
import { useDispatch, useSelector } from "react-redux";

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles'
import { useState } from 'react';

const Account = () => {

    const avatar = useSelector((state) => state.avatar.avatar)
    const [selectedUri, setSelectedUri] = useState(null)
    const dispatch = useDispatch()

    const verificarPermisos = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== "granted") {
            Alert.alert(
                "Permisos insuficientes",
                [{ text: "Ok" }]
            )
            return false
        }
        return true
    }

    const seleccionarImagen = async () => {
        const permisos = await verificarPermisos()
        if (!permisos) return
        const img = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.6
        })
        if (!img.canceled) {
            setSelectedUri(img.assets[0].uri)
            dispatch(addAvatar(img.assets[0].uri))
        }
    }

    const eliminarImagen = () => {
        dispatch(deleteAvatar());
    }

    return (
        <View style={styles.content}>
            {!avatar ? (
                <TouchableOpacity style={styles.buttonAddContainer} activeOpacity={0.6} onPress={seleccionarImagen}>
                    <FontAwesome name="user-circle-o" size={24} style={styles.text} />
                    <Text style={styles.text}> Agregar avatar</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.imgContainer}>
                    <Image source={{ uri: avatar }} style={styles.img} />
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.6} onPress={seleccionarImagen}>
                            <Text style={styles.text}> Cambiar avatar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.6} onPress={eliminarImagen}>
                            <Text style={styles.text}> Eliminar avatar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )


}

export default Account