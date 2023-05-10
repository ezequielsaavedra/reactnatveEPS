import { StatusBar, StyleSheet, View } from 'react-native';

import Descubrir from './src/screens/Descubrir';
import Favoritos from "./src/screens/Favoritos"

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Favoritos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F2E",
  }
});
