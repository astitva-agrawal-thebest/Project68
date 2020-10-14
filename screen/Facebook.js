import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Facebook extends React.Component {
  render(){
  return (
    <View style={styles.container}><TouchableOpacity>
      <Text>scan OR CODE NOW !!! OR YOUR PHONE WILL HANG</Text>
    </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
