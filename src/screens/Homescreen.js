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
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});
