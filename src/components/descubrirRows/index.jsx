import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import styles from './styles'

const DescubrirRows = ({ animes, selectAnime }) => {

    const renderItem = ({ item, index }) => {
        if (index < 5) {
            return (
                <TouchableOpacity style={styles.imagenContainer} activeOpacity={0.9} onPress={() => selectAnime(item)}>
                    <Image
                        source={{ uri: `${item.img}` }}
                        style={styles.imagenStyle}
                    />
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={animes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    )
}

export default DescubrirRows