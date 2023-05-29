import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

import DescubrirRows from '../../components/descubrirRows';
import { FontAwesome } from '@expo/vector-icons';
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";

const Descubrir = ({ navigation }) => {
    const animes = useSelector((state) => state.animes.animes)
    const animesDescubrir = animes.filter((anime) => anime.descubrir)
    const animesTrending = animesDescubrir.filter((anime) => anime.categoria === "Trending")
    const animesSeries = animesDescubrir.filter((anime) => anime.categoria === "Series")
    const animesPeliculas = animesDescubrir.filter((anime) => anime.categoria === "Peliculas")
    const dispatch = useDispatch()
    const selectAnime = (anime) => {
        dispatch(selectedAnime(anime.id));
        navigation.navigate("Details", {
            name: anime.name
        })
    }

    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8}>
                <Text style={styles.titles}>Trending</Text>
                <FontAwesome
                    name="chevron-right"
                    size={24}
                    style={styles.titles}
                /></TouchableOpacity>
            <DescubrirRows animes={animesTrending} selectAnime={selectAnime}/>
            <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8}>
                <Text style={styles.titles}>Series</Text>
                <FontAwesome
                    name="chevron-right"
                    size={24}
                    style={styles.titles}
                /></TouchableOpacity>
            <DescubrirRows animes={animesSeries} selectAnime={selectAnime}/>
            <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8}>
                <Text style={styles.titles}>Peliculas</Text>
                <FontAwesome
                    name="chevron-right"
                    size={24}
                    style={styles.titles}
                /></TouchableOpacity>
            <DescubrirRows animes={animesPeliculas} selectAnime={selectAnime}/>
        </View>
    )
}


export default Descubrir