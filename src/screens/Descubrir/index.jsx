import Card from "../../components/cards"
import Header from '../../components/header';
import { View } from 'react-native'
import styles from "./styles";
import { useFonts } from "expo-font"

class cards {
    constructor(nombre, imagen, id, fecha, episodios) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.id = id;
        this.fecha = fecha,
            this.episodios = episodios
    }
}

const anime1 = new cards("Hagane no Renkinjutsushi", require("../../../assets/img/fma.webp"), 1, "2009 - 2010", 64)
const anime2 = new cards("Shin Seiki Evangerion", require("../../../assets/img/nge.webp"), 2, "1995 - 1996", 26)
const anime3 = new cards("Hantā Hantā", require("../../../assets/img/hxh.webp"), 3, "2011 - 2014", 148)

const animes = [anime1, anime2, anime3]




const Descubrir = () => {
    return (
        <View style={styles.content}>
            <Header title={"Descubrir"}/>
            <Card animes={animes}  newStyles={styles.textCards} />
        </View>
    )
}


export default Descubrir