import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import product from './product.json';
import ProductCard from './components/ProductCard';

const App2 = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  //const [text, onChangeText] = React.useState(null);
  const textInput = () => (
    <TextInput style={styles.search} placeholder="Ara..." />
  );
  return (
    <SafeAreaView>
      <Text style={styles.title}>PatikaStore</Text>
      <FlatList
        ListHeaderComponent={textInput}
        data={product}
        renderItem={renderProduct}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  search: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default App2;
