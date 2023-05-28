import { Image, Text, View } from 'react-native'

import React from 'react'
import styles from './styles';

const DetailCard = ({ selectedAnime }) => {

    return (
        <View style={styles.container}>
            <View style={styles.renderItemStyle}>
            <View style={styles.imagenContainer}>
                <Image
                    source={{ uri: `${selectedAnime.img}` }}
                    style={styles.imagenStyle}
                />
            </View>
            <View>
                <Text style={styles.itemStyle}>{selectedAnime.name}</Text>
                <Text style={styles.itemStyle}>{selectedAnime.date}</Text>
                <Text style={styles.itemStyle}>Cantidad de episodios: {selectedAnime.episodes}</Text>
            </View>
        </View>
        </View>
    )
}

export default DetailCard