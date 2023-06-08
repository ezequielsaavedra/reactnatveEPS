import { Text, TouchableOpacity } from 'react-native'
import { add_anime_watchList, remove_anime_watchList } from '../../store/actions/watchList.action';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';

const AddListButton = ({ selectedAnime }) => {

    const dispatch = useDispatch();
    const addAnimeList = () => {
        dispatch(add_anime_watchList(selectedAnime))
    }
    const removeAnimeList = () => {
        dispatch(remove_anime_watchList(selectedAnime.id))
    }


    const animes = useSelector((state) => state.watchListAnimes.watchListAnimes)
    const indexAnime = animes.findIndex(anime => anime.id === selectedAnime.id)


    if (indexAnime === -1) {
        return (
            <TouchableOpacity onPress={() => addAnimeList(selectedAnime)} style={styles.container}>
                <FontAwesome name="plus-square-o" size={24} color="white" style={styles.modalText} />
                <Text style={[styles.modalText, styles.textStyle]}>Agregar a la lista</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={() => removeAnimeList(selectedAnime.id)} style={styles.container}>
                <FontAwesome name="plus-square-o" size={24} color="white" style={styles.modalText} />
                <Text style={[styles.modalText, styles.textStyle]}>Quitar de la lista</Text>
            </TouchableOpacity>
        )
    }


}

export default AddListButton