import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native'
import styles from './styles';
import { useSelector } from "react-redux";

const FavIcon = ({ selectedAnime }) => {

    const animes = useSelector((state) => state.favAnimes.favAnimes)
    const indexAnime = animes.findIndex(anime => anime.id === selectedAnime.id)

    if (indexAnime === -1) {
        return (
            <View style={styles.containerUno}>
                <FontAwesome name="heart-o" size={24} color="black" />
            </View>
        )
    } else {
        return (
            <View style={styles.containerDos} >
                <FontAwesome name="heart" size={24} color="white" />
            </View>
        )
    }


}

export default FavIcon