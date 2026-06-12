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
