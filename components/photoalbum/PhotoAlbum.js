import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PhotoItem from './PhotoItem';

const PhotoAlbum = () => {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
      .then((response) => response.json())
      .then((data) => {
        setPhotoList(data);
        console.log('Data loaded', data);
      });
  }, []);

  const renderPhoto = (photo) => {
    return <PhotoItem photo={photo} key={photo.id} />;
  };

  return (
    <View>
      <FlatList
        data={photoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => renderPhoto(item)}
      />
    </View>
  );
};

export default PhotoAlbum;

const styles = StyleSheet.create({});
