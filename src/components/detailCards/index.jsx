import { Image, Text, View } from 'react-native'

import AddModal from '../addModal';
import FavIcon from '../favIcon';
import React from 'react'
import styles from './styles';

const DetailCard = ({ selectedAnime }) => {

    return (
        <View style={styles.renderItemStyle}>
            <View style={styles.imagenContainer}>
                <Image
                    source={{ uri: `${selectedAnime.img}` }}
                    style={styles.imagenStyle}
                />
                <FavIcon selectedAnime={selectedAnime} />
                <AddModal selectedAnime={selectedAnime}/>
            </View>
            <View style={styles.descripcionContainer}>
                <Text style={[styles.descripcionStyle, styles.title]}>{selectedAnime.name}</Text>
                <Text style={styles.descripcionStyle}>{selectedAnime.descripcion}</Text>
                <Text style={styles.descripcionStyle}>{selectedAnime.date}</Text>
                <Text style={styles.descripcionStyle}>Duracion: {selectedAnime.duracion}</Text>
                <Text style={styles.descripcionStyle}>IMDb: {selectedAnime.rating}</Text>
            </View>
        </View>
    )
}

export default DetailCard