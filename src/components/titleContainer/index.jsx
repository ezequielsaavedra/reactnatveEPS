import { Text, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';

const TitleContainer = ({ title, selectCategory }) => {
    return (
        <TouchableOpacity style={styles.titleCotainer} activeOpacity={0.8} onPress={() => selectCategory(title)}>
            <Text style={styles.titles}>{title}</Text>
            <FontAwesome name="plus-square" size={24} style={styles.titles} />
        </TouchableOpacity>
    );
};

export default TitleContainer