import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PhotoDetails = ({route, navigation}) => {
  const photo = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={{uri: photo.url}} style={styles.img} />
      </View>

      <View style={{...styles.container, ...styles.textContainer}}>
        <Text>{photo.title}</Text>
      </View>
    </View>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  container: {flex: 1},
  textContainer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
