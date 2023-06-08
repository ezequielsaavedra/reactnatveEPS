import { Text, TouchableOpacity } from 'react-native'
import { add_anime_fav, remove_anime_fav } from '../../store/actions/fav.action';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';

const AddFavButton = ({ selectedAnime }) => {

    const dispatch = useDispatch();
    const addAnimeFav = () => {
        dispatch(add_anime_fav(selectedAnime))
    }
    const removeAnimeFav = () => {
        dispatch(remove_anime_fav(selectedAnime.id))
    }

    const animes = useSelector((state) => state.favAnimes.favAnimes)
    const indexAnime = animes.findIndex(anime => anime.id === selectedAnime.id)


    if (indexAnime === -1) {
        return (
            <TouchableOpacity onPress={() => addAnimeFav(selectedAnime)} style={styles.container}>
                <FontAwesome name="heart-o" size={24} color="white" style={styles.modalText} />
                <Text style={[styles.modalText, styles.textStyle]}>Agregar a Favoritos</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={() => removeAnimeFav(selectedAnime.id)} style={styles.container}>
                <FontAwesome name="heart-o" size={24} color="white" style={styles.modalText} />
                <Text style={[styles.modalText, styles.textStyle]}>Quitar de Favortios</Text>
            </TouchableOpacity>
        )
    }


}

export default AddFavButton