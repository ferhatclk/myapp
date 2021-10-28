/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
  },
  image:{
    height: Dimensions.get('window').height / 4 ,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
  },
  description:{
    padding: 5,
  },
  author:{
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
