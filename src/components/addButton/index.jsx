import { Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles'

const AddButton = ({ navigation }) => {

    const addAnime = () => {
        navigation.navigate("Descubrir")
    }

    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.buttonContainer} onPress={addAnime} activeOpacity={0.6}>
            <FontAwesome name="plus" size={24} style={styles.text}/>
            <Text style={styles.text}> Agregar Anime</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddButton