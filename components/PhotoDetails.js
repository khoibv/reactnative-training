import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PhotoDetails = ({photo}) => {
  return (
    <View>
      <View style={{flex: 1}}></View>

      <View style={{flex: 1}}>
        <Text>{photo.title}</Text>
      </View>
    </View>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({});
