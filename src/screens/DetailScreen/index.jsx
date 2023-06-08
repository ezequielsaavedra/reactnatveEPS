import React, { useEffect } from 'react'
import { add_anime_fav, remove_anime_fav } from '../../store/actions/fav.action';
import { useDispatch, useSelector } from "react-redux";

import DetailCard from '../../components/detailCards'
import { View } from 'react-native'
import { selectedAnime } from '../../store/actions/anime.action';
import styles from "./styles";

const DetailScreen = () => {
    const selectAnime = useSelector((state) => state.animes.selected)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(selectedAnime(selectAnime.id))
    }, [])

    return (
        <View style={styles.content}>
            <DetailCard selectedAnime={selectAnime}/>
        </View>
    )
}

export default DetailScreen