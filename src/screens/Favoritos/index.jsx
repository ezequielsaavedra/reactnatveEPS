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

const anime1 = new cards("Demon Slayer", require("../../assets/img/KnY.webp"), 1, "2019 - actualidad", 55)
const anime2 = new cards("Attack on Titan", require("../../assets/img/SnK.jpg"), 2, "2013 - actualidad", 88)
const anime3 = new cards("Your Lie in April", require("../../assets/img/SwKnU.webp"), 3, "2014 - 2015", 22)

const animes = [anime1, anime2, anime3]

const Favoritos = ({ navigation }) => {
    
    return (
        <View style={styles.content} >
            <Card animes={animes}/>
            {/* <Footer navigation={navigation}/> */}
        </View>
    )
}


export default Favoritos