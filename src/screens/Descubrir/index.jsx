import Card from "../../components/cards"
import Footer from "../../components/footer";
import { View } from 'react-native'
import styles from "./styles";

class cards {
    constructor(nombre, imagen, id, fecha, episodios) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.id = id;
        this.fecha = fecha,
            this.episodios = episodios
    }
}

const anime1 = new cards("Fullmetal Alchemist", require("../../assets/img/fma.webp"), 1, "2009 - 2010", 64)
const anime2 = new cards("Neon Genesis Evangelion", require("../../assets/img/nge.webp"), 2, "1995 - 1996", 26)
const anime3 = new cards("Hunter x Hunter", require("../../assets/img/hxh.webp"), 3, "2011 - 2014", 148)

const animes = [anime1, anime2, anime3]




const Descubrir = ({ navigation }) => {
    return (
        <View style={styles.content}>
            <Card animes={animes}/>
            {/* <Footer navigation={navigation}/> */}
        </View>
    )
}


export default Descubrir