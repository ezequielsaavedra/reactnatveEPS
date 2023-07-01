import { useDispatch, useSelector } from "react-redux";

import DescubrirRows from '../../components/descubrirRows';
import TitleContainer from '../../components/titleContainer';
import { View } from 'react-native'
import { fetch_anime_fav } from "../../store/actions/fav.action";
import { fetch_anime_finished } from "../../store/actions/finished.action";
import { fetch_anime_watch } from "../../store/actions/watchList.action";
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";
import { useEffect } from "react";

const Descubrir = ({ navigation }) => {
    const animes = useSelector((state) => state.animes.animes)
    const filterAnimesByCategory = (animes, category) => {
        return animes.filter(anime => anime.categoria === category);
    };
    const animesTrending = filterAnimesByCategory(animes, "Trending");
    const animesSeries = filterAnimesByCategory(animes, "Series");
    const animesPeliculas = filterAnimesByCategory(animes, "Peliculas");

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetch_anime_fav());
        dispatch(fetch_anime_finished());
        dispatch(fetch_anime_watch());
    }, [])

    const selectAnime = (anime) => {
        dispatch(selectedAnime(anime.id));
        navigation.navigate("Details", {
            name: anime.name
        })
    }

    const selectCategory = (title) => {
        navigation.navigate("DescubrirCategories", {
            name: title
        })
    }

    return (
        <View style={styles.content}>
            <TitleContainer title="Trending" selectCategory={selectCategory} />
            <DescubrirRows animes={animesTrending} selectAnime={selectAnime} />
            <TitleContainer title="Series" selectCategory={selectCategory} />
            <DescubrirRows animes={animesSeries} selectAnime={selectAnime} />
            <TitleContainer title="Peliculas" selectCategory={selectCategory} />
            <DescubrirRows animes={animesPeliculas} selectAnime={selectAnime} />
        </View>
    )
}


export default Descubrir