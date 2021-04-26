import React from "react";
import {
  SafeAreaView,
  Alert,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1453242c9d72",
    title: "Fourthly Item",
  },
  {
    id: "2342342w-3da1-471f-bd96-1453242c9d72",
    title: "Fifth Item",
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.block}>
      <Text style={styles.txt}>{item.title}</Text>
      <TouchableOpacity
        activeOpacity={0.95}
        style={styles.button}
        onPress={() =>
          Alert.alert("Alert", item.title, [
            { text: "tasdiqlash", onPress: () => Alert.alert("OK") },
            { text: "rad etish", onPress: () => Alert.alert("NO") },
          ],{ cancelable: true })
        }
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>صلاة عرضية</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 300,
    height: 500,
    backgroundColor: "red",
    margin: 50,
  },
  title: {
    // borderColor:"red",
    // borderStyle:"solid",
    // borderWidth:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 320,
  },
  title_text: {
    textAlign: "center",
    fontSize: 30,
    textTransform: "capitalize",
  },
  button: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    width: "13%",
    alignSelf: "flex-end",
    borderRadius: 50,
    zIndex: 100,
  },
  text: {
    fontSize: 35,
    color: "white",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  block: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#E1E2E1",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    marginTop: 5,
    minWidth: "98%",
    textAlign: "center",
  },
  txt: {
    width: "80%",
  },
});

export default App;
