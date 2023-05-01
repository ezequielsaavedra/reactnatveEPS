import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from "react";

export default function App() {
  const [anime, setAnime ] = useState("")
  const [ list, setList ] = useState([])

  const textAnime = text => {
    setAnime(text);
  };

  const addAnime = () => {
    if (anime !== "") {
      setList(prevState => [
        ...prevState,
        { name: anime, id: Math.random().toString() },
      ]);
      setAnime("");
    }
    else {
      return
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.itemStyle}>{item.name}</Text>
      <TouchableOpacity
          onPress={() => deleteItem(item)}
          style={styles.buttonDelete}>
        <View >
          <Text style={styles.textTouchable}>X</Text>
        </View>
          </TouchableOpacity>
    </View>
  );

  const deleteItem = item => {
    setList(prevState =>
      prevState.filter(element => element.name !== item.name)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Watch List </Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="Anime"
            placeholderTextColor= "#DCCA2C"
            style={styles.input}
            onChangeText={textAnime}
            value={anime}
          />
          <TouchableOpacity
          onPress={addAnime}
          style={styles.button}>
        <View >
          <Text style={styles.textTouchable}>Agregar</Text>
        </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={anime => anime.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F2E",
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#DCCA2C",
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "#DCCA2C",
    borderBottomWidth: 2,
    width: 250,
    color: "#DCCA2C"
  },
  button: {
    backgroundColor: "#DCCA2C",
    width: 75,
    height: 25,
    borderRadius: 5,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#1B1B1B",
    borderRadius: 10,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemStyle: {
    color: "#DCCA2C",
    marginLeft: 7
  },
  buttonDelete: {
    backgroundColor: "#DCCA2C",
    width: 25,
    height: 25,
    borderRadius: 5,
    underlayColor: "#DCCA2C",
    marginRight: 10
  },
  textTouchable: {
    marginLeft: 7,
    marginTop: 2
  }
});
