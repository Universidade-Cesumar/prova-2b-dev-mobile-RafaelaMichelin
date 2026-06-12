import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import Formulario from './componentes/Formulario';
import ListaMateriais from './componentes/ListaMateriais';
import { getMateriais, criarMaterial } from './service/api';

export default function App() {
  // --- Estados da Aplicação (Os alunos implementarão aqui) ---

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [materiais, setMateriais] = useState([]);
  const [enviando, setEnviando] = useState(false);


  // --- Funções de Requisição e Efeitos (Os alunos implementarão aqui) ---

  //Função de busca
  const carregarMateriais = async () => {
    try {
      const data = await getMateriais();
      setMateriais(data);
    } catch (error) {
      console.error('Erro ao carregar materiais:', error);
      Alert.alert('Erro', 'Não foi possível carregar o inventário.');
    }
  };
  useEffect(() => {
    carregarMateriais();
  }, []);

  // Função de cadastrar
  const cadastrarMaterial = async () => {
    if (!nome.trim() || !quantidade.trim()) {
      Alert.alert('Atenção', 'Preencha o nome e a quantidade.');
      return;
    }

    try {
      setEnviando(true);
      await criarMaterial({ nome, quantidade: Number(quantidade) });
      setNome('');
      setQuantidade('');
      await carregarMateriais();
    } catch (error) {
      console.error('Erro ao cadastrar material:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar o material.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Almoxarifado - Enfermagem</Text>

      {/* Breve descrição do projeto inserida abaixo */}
      <Text style={styles.description}>
        Este template servirá para desenvolver o projeto responsável por modernizar o controle de insumos médicos do almoxarifado.
        Através desta interface conectada à API, é possível realizar o inventário em tempo real, cadastrar novos materiais e registrar baixas de estoque de forma ágil e segura.
      </Text>

      {/* Os alunos vão construir os componentes visuais das Sprints aqui dentro */}

      <Formulario
        nome={nome}
        setNome={setNome}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
        onCadastrar={cadastrarMaterial}
        enviando={enviando}
      />

       <Text style={styles.subtitle}>Estoque de Materiais</Text>
      <ListaMateriais materiais={materiais} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Reduzido ligeiramente para aproximar o texto explicativo
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20, // Dá um espaçamento confortável entre as linhas do parágrafo
    marginBottom: 30, // Margem inferior para afastar o texto dos futuros inputs dos alunos
  },
   subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});