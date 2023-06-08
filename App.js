import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import MainNavigator from './src/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native'
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

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
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
