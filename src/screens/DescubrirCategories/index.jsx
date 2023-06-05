import { useDispatch, useSelector } from "react-redux";

import AnimeCard from "../../components/animeCards"
import { View } from 'react-native'
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";
import { useRoute } from '@react-navigation/native';

const DescubrirCategories = ({ navigation }) => {
    const route = useRoute()
    const animes = useSelector((state) => state.animes.animes)

    const dispatch = useDispatch()
    const selectAnime = (anime) => {
        dispatch(selectedAnime(anime.id));
        navigation.navigate("Details", {
            name: anime.name
        })
    }

    const getAnime = () => {
        if (route.params.name === "Trending") {
            return (animes.filter((anime) => anime.descubrir && anime.categoria === route.params.name))
        } else if (route.params.name === "Series") {
            return (animes.filter((anime) => anime.descubrir && anime.categoria === route.params.name))
        } else if (route.params.name === "Peliculas") {
            return (animes.filter((anime) => anime.descubrir && anime.categoria === route.params.name))
        } else {
            return [];
        }
    }

    const setAnime = getAnime()

    return (
        <View style={styles.content} >
            <AnimeCard animes={setAnime} selectAnime={selectAnime} />
        </View>
    )
}

export default DescubrirCategories