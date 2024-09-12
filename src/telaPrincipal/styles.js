import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, // Garante que a imagem cubra todo o espaço da tela
    justifyContent: "flex-start", // Alinha os elementos verticalmente no centro (opcional)
    alignItems: "flex-start", // Alinha os elementos horizontalmente no centro (opcional)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20, // Adicionado para dar espaço abaixo do título
  },
  button1: {
    backgroundColor: "green",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  alert: {
    marginTop: 20,
    color: 'red',
  },
});
