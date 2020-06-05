import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PhotoItem = (props) => {
  const {photo} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate('AlbumDetails', photo)}>
        <Image source={{uri: photo.thumbnailUrl}} style={styles.img} />
        <Text style={styles.title}>{photo.title.substring(0, 20)} ...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  wrapper: {
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
