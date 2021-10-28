import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.product_image} source={{uri: product.imgURL}} />
      <Text style={styles.product_title}>{product.title}</Text>
      <Text>{product.price}</Text>
      <Text>{product.inStock === true ? ' ' : 'STOKTA YOK'}</Text>
    </View>
  );
};

export default ProductCard;
