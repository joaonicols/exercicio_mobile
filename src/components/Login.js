import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.container}>
        <Icon name="user" size={150} color="black" style={styles.icone} />
        <View style={styles.card}>
          <TextInput
            style={styles.caixaEntrada}
            placeholder="E-mail"
            maxLength={50}
            keyboardType="email-adress"
          />

          <TextInput
            style={styles.caixaEntrada}
            placeholder="Password"
            maxLength={20}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.txtAuthLogin}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoAm}>
            <Text style={styles.txtAuthLogin}>SWITCH TO SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffcf1',
  },

  header: {
    backgroundColor: 'black',
    padding: 25,
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  icone: {
    marginTop: -40,
    marginBottom: 40,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // funciona no Android para sombra
  },

  caixaEntrada: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 8,
  },

  botao: {
    backgroundColor: '#c2185b',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoAm: {
    backgroundColor: '#f8b400',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },

  txtAuthLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
