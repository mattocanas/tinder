import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {Auth} from 'aws-amplify';
export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const save = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <TextInput
          placeholder="Name..."
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Bio..."
          style={styles.input}
          value={bio}
          numberOfLines={3}
          onChangeText={setBio}
        />

        <Pressable onPress={save} style={styles.button}>
          <Text>Save</Text>
        </Pressable>

        <Pressable onPress={() => Auth.signOut()} style={styles.button}>
          <Text>Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    flex: 1,
  },
  container: {
    padding: 10,
  },
  input: {
    margin: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: '#f63a6e',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
});
