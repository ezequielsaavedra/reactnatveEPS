import { Image, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles'
import { useSelector } from "react-redux";

const AccountButton = ({ navigation }) => {

    const avatar = useSelector((state) => state.avatar.avatar)

    const goToAccount = () => {
        navigation.navigate("Account")
    }



    return (
        <View>
            <TouchableOpacity onPress={goToAccount}>
                {!avatar ? (<FontAwesome name="user-circle-o" size={24} style={styles.text} />
                ) : (
                <Image source={{ uri: avatar }} style={styles.img} />
                )
                }
            </TouchableOpacity>
        </View>
    )
}

export default AccountButton