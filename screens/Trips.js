import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Trips() {
  return (
    <View style={styles.container}>
      <Text>TRips</Text>
    </View>
  );
}

export default Trips

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });