import { StatusBar, StyleSheet, View } from 'react-native';

import Navigator from './src/navigation/Navigator';
import colors from './src/constants/colors';
import { useFonts } from "expo-font"

export default function App() {
  const [loaded] = useFonts({
    SourceSerifPro: require("./src/assets/fonts/SourceSerifPro-Black.ttf"),
    JosefinSansItalic: require("./src/assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf")
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});
