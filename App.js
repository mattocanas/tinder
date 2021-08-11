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
import Card from './src/components/Card';
import users from './assets/data/users';

import AnimatedStack from './src/components/AnimatedStack';

export default function App() {
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
  pageContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
