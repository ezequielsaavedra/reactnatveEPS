import { FlatList, Image, Text, View } from 'react-native'

import styles from './styles';

const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
        <Image
            source={item.imagen}
            style={styles.imagenStyle}
        />
        <View>
        <Text style={styles.itemStyle}>{item.nombre}</Text>
        <Text style={styles.itemStyle}>{item.fecha}</Text>
        <Text style={styles.itemStyle}>Cantidad de episodios: {item.episodios}</Text>
        </View>
    </View>
);

const Card = ({ animes }) => {
    return (
        <View>
            <FlatList
                data={animes}
                renderItem={renderItem}
                keyExtractor={anime => anime.id}
            />
        </View>
    )
}

export default Card
