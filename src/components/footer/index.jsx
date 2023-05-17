import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import styles from "./style";

const Footer = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate("Descubrir")}>
                <FontAwesome
                    name="search"
                    size={24}
                    style={styles.iconFooter}
                />
                <Text style={styles.textFooter}>Descubrir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Favoritos")}>
                <FontAwesome
                    name="heart-o"
                    size={24}
                    style={styles.iconFooter}
                />
                <Text style={styles.textFooter}>Favoritos</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
