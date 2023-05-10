import Card from "../../components/cards"
import Header from '../../components/header';
import { View } from 'react-native'

class cards {
    constructor(nombre, imagen, id, fecha, episodios) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.id = id;
        this.fecha = fecha,
            this.episodios = episodios
    }
}

const anime1 = new cards("Demon Slayer", require("../../../assets/img/KnY.webp"), 1, "2019 - actualidad", 55)
const anime2 = new cards("Shingeki no Kyojin", require("../../../assets/img/SnK.jpg"), 2, "2013 - actualidad", 88)
const anime3 = new cards("Shigatsu wa Kimi no uso", require("../../../assets/img/SwKnU.webp"), 3, "2014 - 2015", 22)

const animes = [anime1, anime2, anime3]

const Descubrir = () => {

    return (
        <View>
            <Header title={"Descubrir"} />
            <Card animes={animes} />
        </View>
    )
}


export default Descubrir