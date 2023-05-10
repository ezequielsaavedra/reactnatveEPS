import { Text, View } from 'react-native'

import styles from './styles'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>{title}</Text>
        </View>
    )
}

export default Header