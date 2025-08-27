import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

function HomeScreen(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then(function(res) { return res.json(); })
      .then(function(data) {
        setProducts(data);
        setLoading(false);
      })
      .catch(function(err) {
        setError(err);
        setLoading(false);
      });
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={function () { props.navigation.navigate("Detail", { id: item.id }); }}
      >
        <Image source={{ uri: item.image }} style={styles.thumbnail} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching products</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={function(item) { return item.id.toString(); }}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});

export default HomeScreen;
