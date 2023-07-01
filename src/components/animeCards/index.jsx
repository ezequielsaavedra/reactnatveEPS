import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import { fetch_anime_fav } from "../../store/actions/fav.action";
import { fetch_anime_finished } from "../../store/actions/finished.action";
import { fetch_anime_watch } from "../../store/actions/watchList.action";
import styles from './styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AnimeCard = ({ animes, selectAnime }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetch_anime_fav());
        dispatch(fetch_anime_finished());
        dispatch(fetch_anime_watch());
    }, [])


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.renderItemStyle} activeOpacity={0.9} onPress={() => selectAnime(item)}>
            <View style={styles.imagenContainer}>
                <Image
                    source={{ uri: `${item.img}` }}
                    style={styles.imagenStyle}
                />
            </View>
            <View>
                <Text style={styles.itemStyle}>{item.name}</Text>
                <Text style={styles.itemStyle}>{item.date}</Text>
                <Text style={styles.itemStyle}>Duracion: {item.duracion}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={animes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default AnimeCard
