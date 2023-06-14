import { Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles'

const AccountButton = ({ navigation }) => {

    const goToAccount = () => {
        navigation.navigate("Account")
    }

    return (
        <View>
            <TouchableOpacity onPress={goToAccount}>
                <FontAwesome name="user-circle-o" size={24} style={styles.text} />
            </TouchableOpacity>
        </View>
    )
}

export default AccountButton