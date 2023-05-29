import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles';

const AnimeCard = ({ animes, selectAnime }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.renderItemStyle} activeOpacity={0.9} onPress={() => selectAnime(item)}>
            <View style={styles.imagenContainer}>
                <Image
                    source={{ uri: `${item.img}` }}
                    style={styles.imagenStyle}
                />
            </View>
            <View>
                <Text style={styles.itemStyle}>{item.name}</Text>
                <Text style={styles.itemStyle}>{item.date}</Text>
                <Text style={styles.itemStyle}>Duracion: {item.duracion}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={animes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default AnimeCard
