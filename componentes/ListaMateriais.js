import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';


export default function ListaMateriais({ materiais }) {


  return (
    <FlatList
      testID="lista-materiais"
      data={materiais}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemNome}>{item.nome}</Text>
          <Text style={styles.itemQuantidade}>{item.quantidade} un.</Text>
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Nenhum material cadastrado ainda.</Text>
      }
    />
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
  itemNome: {
    fontSize: 14,
    fontWeight: '500',
  },
  itemQuantidade: {
    fontSize: 14,
    color: '#0066cc',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
});