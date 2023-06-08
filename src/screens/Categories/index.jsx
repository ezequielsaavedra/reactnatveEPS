import { useDispatch, useSelector } from "react-redux";

import AddButton from "../../components/addButton";
import AnimeCard from "../../components/animeCards"
import { View } from 'react-native'
import { selectedAnime } from "../../store/actions/anime.action";
import styles from "./styles";
import { useRoute } from '@react-navigation/native';

const Categories = ({ navigation }) => {
    const route = useRoute()
    const animesFav = useSelector((state) => state.favAnimes.favAnimes)
    const animesFinished = useSelector((state) => state.finishedAnimes.finishedAnimes)
    const animesWatchList = useSelector((state) => state.watchListAnimes.watchListAnimes)
    const dispatch = useDispatch()
    const selectAnime = (anime) => {
        dispatch(selectedAnime(anime.id));
        navigation.navigate("Details", {
            name: anime.name
        })
    }
    
    const getAnime = () => {
        if(route.name === "Favoritos") {
            return (animesFav)
        } else if (route.name === "Watch List") {
            return (animesWatchList)
        } else if  (route.name === "Ya Visto") {
            return (animesFinished)
        } else {
            return [];
        }
    }

    const setAnime = getAnime()


    if(setAnime.length > 0) {
        return (
            <View style={styles.content} >
                <AnimeCard animes={setAnime} selectAnime={selectAnime} />
            </View>
        )
    } else {
        return (
            <View style={styles.content} >
                <AddButton navigation={navigation}/>
            </View>
        )
    }


    }




export default Categories