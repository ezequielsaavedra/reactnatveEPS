import { useDispatch, useSelector } from "react-redux";

import AnimeCard from "../../components/animeCards"
import { View } from 'react-native'
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";
import { useRoute } from '@react-navigation/native';

const Categories = ({ navigation }) => {
    const route = useRoute()
    const animes = useSelector((state) => state.animes.animes)
    const animesFavoritos = animes.filter((anime) => anime.fav)
    const animesWatchList = animes.filter((anime) => anime.watching)
    const animesFinished = animes.filter((anime) => anime.finished)
    const dispatch = useDispatch()
    const selectAnime = (anime) => {
        dispatch(selectedAnime(anime.id));
        navigation.navigate("Details", {
            name: anime.name
        })
    }
    
    if(route.name === "Favoritos"){
        return (
            <View style={styles.content} >
                <AnimeCard animes={animesFavoritos} selectAnime={selectAnime} />
            </View>
        )
    } else if (route.name === "Watch List") {
        return (
            <View style={styles.content} >
                <AnimeCard animes={animesWatchList} selectAnime={selectAnime} />
            </View>
        )
    } else if (route.name === "Ya Visto") {
        return (
            <View style={styles.content} >
                <AnimeCard animes={animesFinished} selectAnime={selectAnime} />
            </View>
        )
    }

}


export default Categories