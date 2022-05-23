import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Mateus');
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu nome...'
      value={input}
      onChangeText={text => setInput(text)}
      />
      <TouchableOpacity style={styles.addNewName} onPress={(() => setName(input))}>
        <Text style={styles.subText}>seu nome é {input}?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(() => setName(name == 'Mateus' ? 'Marcos' : 'Mateus'))}>
        <Text style={styles.textButton}>Altera nome para o  {name == 'Mateus' ? 'Marcos' : 'Mateus'}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Olá {name}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  subText: {
    fontSize: 10,
  },
  textButton: {
    fontSize: 15,
  },
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 40,
    marginBottom: 10,
  },
  addNewName: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
