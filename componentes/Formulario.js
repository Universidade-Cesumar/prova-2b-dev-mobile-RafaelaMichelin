import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Formulario({
  nome,
  setNome,
  quantidade,
  setQuantidade,
  onCadastrar,
  enviando,
}) {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Nome do Material</Text>
      <TextInput
        testID="input-nome"
        style={styles.input}
        placeholder="Ex: Seringa"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        testID="input-quantidade"
        style={styles.input}
        placeholder="Ex: 100"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TouchableOpacity
        testID="btn-cadastrar"
        style={[styles.button, enviando && styles.buttonDisabled]}
        onPress={onCadastrar}
        disabled={enviando}
      >
        <Text style={styles.buttonText}>
          {enviando ? 'Cadastrando...' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#99c2e8',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});