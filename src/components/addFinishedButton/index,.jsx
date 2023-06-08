import { Text, TouchableOpacity } from 'react-native'
import { add_anime_finished, remove_anime_finished } from '../../store/actions/finished.action';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';

const AddFinishedButton = ({ selectedAnime }) => {

    const dispatch = useDispatch();
    const addAnimeFinished = () => {
        dispatch(add_anime_finished(selectedAnime))
    }
    const removeAnimeFinish = () => {
        dispatch(remove_anime_finished(selectedAnime.id))
    }

    const animes = useSelector((state) => state.finishedAnimes.finishedAnimes)
    const indexAnime = animes.findIndex(anime => anime.id === selectedAnime.id)


    if (indexAnime === -1) {
        return (
            <TouchableOpacity onPress={() => addAnimeFinished(selectedAnime)} style={styles.container}>
                <FontAwesome name="flag-checkered" size={24} color="white" style={styles.modalText} />
                <Text style={[styles.modalText, styles.textStyle]}>Ya visto</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={() => removeAnimeFinish(selectedAnime.id)} style={styles.container}>
                <FontAwesome name="flag-checkered" size={24} color="white" style={styles.modalText} />
                <Text style={[styles.modalText, styles.textStyle]}>Sin ver</Text>
            </TouchableOpacity>
        )
    }


}

export default AddFinishedButton