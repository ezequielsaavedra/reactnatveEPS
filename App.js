import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { initFav, initFin, initWatch } from './src/db';

import MainNavigator from "./src/navigation";
import { Provider } from 'react-redux';
import store from './src/store';
import { useFonts } from "expo-font"

export default function App() {
  const [loaded] = useFonts({
    SourceSerifPro: require("./src/assets/fonts/SourceSerifPro-Black.ttf"),
    JosefinSansItalic: require("./src/assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf")
  })

  if (!loaded) {
    return null;
  }

  initFav()
    .then(() => console.log("base creada 1"))
    .catch(err => {
      console.log(err.message)
    })
  initFin()
    .then(() => console.log("base creada 2"))
    .catch(err => {
      console.log(err.message)
    })
  initWatch()
    .then(() => console.log("base creada 3"))
    .catch(err => {
      console.log(err.message)
    })


  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
          <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
