import  React from 'react';
import { StyleSheet, Text, View, Button ,  TouchableOpacity , Alert, Image, ImageBackground} from 'react-native';
import {styles} from './styles'


export default function TelaPrincipal() {
  const handlePress = () => {
  
  };

  return (
    <View
      style={{
        flex: 1
      }}
    >
<ImageBackground
    source={{uri:"https://img.freepik.com/vetores-gratis/maos-apoiando-sinal-de-reciclagem-de-gradiente_78370-853.jpg"}}
    style={styles.container}
    resizeMode="cover"
    >
      <Text style={styles.title}>Aplicativo Faculdade</Text>

    {/* <Image 
      source={{uri:"https://img.freepik.com/vetores-gratis/maos-apoiando-sinal-de-reciclagem-de-gradiente_78370-853.jpg"}}
      style={styles.image}
     /> */}

      {/* <TouchableOpacity style={styles.button1} onPress={handlePress}>
        <Text style={styles.buttonText}>Meu Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={handlePress}>
        <Text style={styles.buttonText}>Ecologia </Text>
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

      
      <Text style={styles.alert}>Aplicativo em Desenvolvimento</Text> */}
    </ImageBackground>
    </View>
    
  );
}

