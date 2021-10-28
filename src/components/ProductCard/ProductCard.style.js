import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#eceff1',
    width: Dimensions.get('window').width / 2,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  product_image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  product_title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
