import { useDispatch, useSelector } from "react-redux";

import AnimeCard from "../../components/animeCards"
import { View } from 'react-native'
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";
import { useRoute } from '@react-navigation/native';

const Categories = ({ navigation }) => {
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
        if(route.name === "Favoritos") {
            return (animes.filter((anime) => anime.fav))
        } else if (route.name === "Watch List") {
            return (animes.filter((anime) => anime.watching))
        } else if  (route.name === "Ya Visto") {
            return (animes.filter((anime) => anime.finished))
        }
    }

    const setAnime = getAnime()

        return (
            <View style={styles.content} >
                <AnimeCard animes={setAnime} selectAnime={selectAnime} />
            </View>
        )
    }




export default Categories