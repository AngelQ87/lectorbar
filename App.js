import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      
        <View style={styles.container}>
          <View style={{position: 'center', width: 150, height: 100, alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Text>Header</Text>
          </View>
          <View style={{width: 150, height: 100, alignItems: 'center', backgroundColor: 'powderblue'}}>
            <Button title='Capturar' onPress={()=>alert('Redireccionar a capturar')}/>
          </View>  
          <View style={{width: 150, height: 100, alignItems: 'center', backgroundColor: 'powderblue'}}>
            <Button title='Base de Datos' onPress={()=>alert('Redireccionar a la base de datos')}/>
          </View>
          <View style={{width: 150, height: 100, alignItems: 'center', backgroundColor: 'powderblue'}}>
            <Button title='Enviar' onPress={()=>alert('Redireccionar a enviar')}/>
          </View>
          <View style={{width: 150, height: 100, alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Text>Footer</Text>
          </View>  
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'row',
    padding: 10,
    margin:10,
  },
  botones: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
