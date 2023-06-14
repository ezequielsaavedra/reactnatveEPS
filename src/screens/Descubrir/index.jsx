import { useDispatch, useSelector } from "react-redux";

import DescubrirRows from '../../components/descubrirRows';
import TitleContainer from '../../components/titleContainer';
import { View } from 'react-native'
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";

const Descubrir = ({ navigation }) => {
    const animes = useSelector((state) => state.animes.animes)
    const filterAnimesByCategory = (animes, category) => {
        return animes.filter(anime => anime.categoria === category);
    };
    const animesTrending = filterAnimesByCategory(animes, "Trending");
    const animesSeries = filterAnimesByCategory(animes, "Series");
    const animesPeliculas = filterAnimesByCategory(animes, "Peliculas");

    const dispatch = useDispatch()
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
            <TitleContainer title="Trending" selectCategory={selectCategory}/>
            <DescubrirRows animes={animesTrending} selectAnime={selectAnime} />
            <TitleContainer title="Series" selectCategory={selectCategory}/>
            <DescubrirRows animes={animesSeries} selectAnime={selectAnime} />
            <TitleContainer title="Peliculas" selectCategory={selectCategory}/>
            <DescubrirRows animes={animesPeliculas} selectAnime={selectAnime} />
        </View>
    )
}


export default Descubrir