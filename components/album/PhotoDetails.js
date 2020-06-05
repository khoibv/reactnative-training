import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PhotoDetails = ({route, navigation}) => {
  const photo = route.params;

  return (
    <View style={{borderWidth: 1, flex: 1}}>
      <View style={{flex: 1}}>
        <Image source={{uri: photo.url}} style={styles.img} />
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>{photo.title}</Text>
      </View>
    </View>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});
