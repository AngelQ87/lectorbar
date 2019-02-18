import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>         
        <Text>Ing. Angel Quintero</Text>               
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
    flexDirection: 'row',   
  },
    
  
});
