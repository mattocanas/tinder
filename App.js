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
  SafeAreaView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Homescreen from './src/screens/Homescreen';
import MatchesScreen from './src/screens/MatchesScreen';
import {color} from 'react-native-reanimated';

export default function App() {
  const color = '#b5b5b5';
  const activeColor = '#f76c6b';

  const [activeScreen, setActiveScreen] = useState('HOME');

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}>
        <View style={styles.topNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <Fontisto
              name="tinder"
              size={30}
              color={activeScreen == 'HOME' ? activeColor : color}
            />
          </Pressable>
          <MaterialCommunityIcon
            name="star-four-points"
            size={30}
            color={color}
          />
          <Pressable onPress={() => setActiveScreen('CHAT')}>
            <Ionicon
              name="ios-chatbubbles"
              size={30}
              color={activeScreen == 'CHAT' ? activeColor : color}
            />
          </Pressable>
          <FontAwesome name="user" size={30} color={color} />
        </View>

        {activeScreen == 'HOME' && <Homescreen />}

        {activeScreen == 'CHAT' && <MatchesScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  root: {flex: 1},
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
});
