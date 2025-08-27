import React, {useState,useEffect} from "react"
import { View, Text, Image, StyleSheet } from "react-native";

function DetailScreen(props) {
  const id = props.route.params.id;
  const [product, setProduct] = useState(null);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(function(res) { return res.json(); })
      .then(function(data) { setProduct(data); });
  }, [id]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
  description: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default DetailScreen;
