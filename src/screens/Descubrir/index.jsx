import AnimeCard from "../../components/animeCards"
import { View } from 'react-native'
import styles from "./styles";
import { useSelector } from "react-redux";

const Descubrir = () => {
    const animes = useSelector((state) => state.animes.animes)
    const animesDescubrir = animes.filter((anime) => anime.descubrir)

    return (
        <View style={styles.content}>
            <AnimeCard animes={animesDescubrir}/>
        </View>
    )
}


export default Descubrir