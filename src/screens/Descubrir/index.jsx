import { Text, TouchableOpacity, View } from 'react-native'

import DescubrirRows from '../../components/descubrirRows';
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import { useSelector } from "react-redux";

const Descubrir = () => {
    const animes = useSelector((state) => state.animes.animes)
    const animesDescubrir = animes.filter((anime) => anime.descubrir)
    const animesTrending = animesDescubrir.filter((anime) => anime.categoria === "Trending")
    const animesSeries = animesDescubrir.filter((anime) => anime.categoria === "Series")
    const animesPeliculas = animesDescubrir.filter((anime) => anime.categoria === "Peliculas")

    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8}>
                <Text style={styles.titles}>Trending</Text>
                <FontAwesome
                    name="chevron-right"
                    size={24}
                    style={styles.titles}
                /></TouchableOpacity>
            <DescubrirRows animes={animesTrending} />
            <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8}>
                <Text style={styles.titles}>Series</Text>
                <FontAwesome
                    name="chevron-right"
                    size={24}
                    style={styles.titles}
                /></TouchableOpacity>
            <DescubrirRows animes={animesSeries} />
            <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8}>
                <Text style={styles.titles}>Peliculas</Text>
                <FontAwesome
                    name="chevron-right"
                    size={24}
                    style={styles.titles}
                /></TouchableOpacity>
            <DescubrirRows animes={animesPeliculas} />
        </View>
    )
}


export default Descubrir