import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PhotoItem = (props) => {
  const {photo} = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.thumbnailUrl}} style={styles.img} />
      <Text style={styles.title}>{photo.title}</Text>
    </View>
  );
};

export default PhotoItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    borderColor: '#eeeeee',
    marginVertical: 4,
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 75,
    height: 75,
  },
  title: {
    paddingHorizontal: 8,
    fontWeight: '700',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
