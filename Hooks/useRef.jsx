import { useState, useEffect, useMemo, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const inputName = useRef(null);

  const letrasName = useMemo(() => { console.log('change'); return name.length },[name]);

  const newName = () => {
    inputName.current.focus();
  }

  useEffect(() => {

    async function getStorage() {
      const name = await AsyncStorage.getItem('name');
      if (name) {
        setName(name);
        setInput(name);
      }
    }
    getStorage()
  }
  , []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('name', name);
    }
    saveStorage();
  }, [name])

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu nome...'
      value={input}
      onChangeText={text => setInput(text)}
      ref={inputName}
      />
      <TouchableOpacity style={styles.addNewName} onPress={(() => setName(input))}>
        <Text style={styles.subText}>seu nome é {input} mesmo?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textButton}  onPress={(() => setName(name == 'Mateus' ? 'Marcos' : 'Mateus'))}>
        <Text style={styles.textButton}>Altera nome para o  {name == 'Mateus' ? 'Marcos' : 'Mateus'}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Olá {name}, seu nome tem {letrasName} letras.</Text>
      <TouchableOpacity style={styles.addNameInput} onPress={(() => newName())}>
        <Text style={styles.text}>useRef</Text>
      </TouchableOpacity>
    
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
    fontSize: 20,
  },
  subText: {
    fontSize: 10,
    color: '#fff',
  },
  textButton: {
    borderWidth: 1,
    borderColor: '#000',
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
    backgroundColor: '#68c6ff',
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNameInput: {
    display: 'flex',
    backgroundColor: '#22f6dd',
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
