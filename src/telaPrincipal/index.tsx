import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

export default function TelaPrincipal() {
  const handlePress = () => {
    // Função para gerenciar os cliques dos botões
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: "https://img.freepik.com/vetores-gratis/maos-apoiando-sinal-de-reciclagem-de-gradiente_78370-853.jpg" }}
        style={styles.backgroundImage} // Aqui o estilo foi atualizado
        resizeMode="cover" // Garante que a imagem cubra todo o espaço disponível
      >
        <Text style={styles.title}>Aplicativo Faculdade</Text>

        {/* Mantive os seus botões */}
        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.buttonText}>Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.buttonText}>Ecologia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.buttonText}>Pontos de coleta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.buttonText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>

        <Text style={styles.alert}>Aplicativo em Desenvolvimento</Text>
      </ImageBackground>
    </View>
  );
}
