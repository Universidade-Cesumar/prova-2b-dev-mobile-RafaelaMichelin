# Prova 2B - Desenvolvimento Mobile

Aplicativo mobile de **Almoxarifado** desenvolvido com **React Native** e **Expo**. Permite cadastrar novos materiais e visualizar o estoque em tempo real, integrado à **[MockAPI](https://mockapi.io/)**.

## Descrição do Projeto

Sistema para controle de insumos médicos do almoxarifado de enfermagem. 

A Sprint 1:

- Cadastro de novos materiais (nome e quantidade)
- Listagem dinâmica do estoque via `FlatList`
- Integração REST com MockAPI (GET e POST)

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React Native** | Interface mobile |
| **Expo (~51)** | Ambiente de desenvolvimento |
| **Fetch** | Requisições HTTP |
| **React Hooks** | `useState`, `useEffect` |




## Autor

**Rafaela Michelin**  

## 📁 Estrutura do Projeto

├── src/
│ ├── components/ # Componentes UI
  └── formulario.js 
  └── listaMateriais.js 
│ ├── services/ # Integração com APIs 
│ └── app.js # Configuração principal
├── README.md
├── package.json # Dependências do projeto
└── tsconfig.json # Configuração do TypeScript
