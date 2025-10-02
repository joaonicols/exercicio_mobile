import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/corinthains_logo.png')} style={styles.image} />
      </View>
      <View>
        <ActivityIndicator size="large" color="#000000ff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
  },
});
