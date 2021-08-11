import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Card from '../components/Card';
import users from '../../assets/data/users';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import AnimatedStack from '../components/AnimatedStack/index';

export default function Homescreen() {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right', user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
      />
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color={'#f8d88b'} />
        </View>

        <View style={styles.button}>
          <Entypo name="cross" size={30} color={'#f76c6b'} />
        </View>

        <View style={styles.button}>
          <FontAwesome name="star" size={30} color={'#3ab4cc'} />
        </View>

        <View style={styles.button}>
          <FontAwesome name="heart" size={30} color={'#4fcc94'} />
        </View>

        <View style={styles.button}>
          <Ionicon name="flash" size={30} color={'#a65cd2'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
});
