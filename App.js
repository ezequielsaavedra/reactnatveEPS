import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Descubrir from './src/screens/Descubrir';
import Favoritos from "./src/screens/Favoritos"
import { FontAwesome } from '@expo/vector-icons';
import colors from './src/constants/colors';
import { useFonts } from "expo-font"
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    "SourceSerifPro": require("./assets/fonts/SourceSerifPro-Black.ttf")
})

  const [descubirAnime, setDescubrirAnime] = useState(true)

  let inicio

  if(descubirAnime) {
    inicio = <Descubrir/>
  } else {
    inicio =  <Favoritos />
  }

  const irDescubrir = () => {
    setDescubrirAnime(true)
  }

  const irFavoritos = () => {
    setDescubrirAnime(false)
  }

  if (!loaded) {
    return null;
}

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      {inicio}
      <View style={styles.footer}>
            <TouchableOpacity onPress={irDescubrir} >
            <FontAwesome name="search" size={24}  style={styles.iconFooter}/>
            <Text style={styles.textFooter}>Descubrir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irFavoritos}>
            <FontAwesome name="heart-o" size={24}  style={styles.iconFooter}/>
            <Text style={styles.textFooter}>Favoritos</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  footer:{
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.black
},
textFooter: {
    color: colors.yellowText,
    alignContent: "center",
    fontFamily: "SourceSerifPro"
},
iconFooter: {
    color: colors.yellowText,
    alignContent: "center",
    marginLeft: 20
}
});
