import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostImage from '@/assets/images/notes.png';
import { useRouter } from 'expo-router';


const HomeScreen =() => {
  return (
    <View style={ styles.constainer }>
      <Image source={ PostImage } style={styles.image}/>
      <Text style={styles.title}>Welcome to notes app Nourhan!</Text>
      <Text style={styles.subtitle}>Start write about your thoughts</Text>

      <TouchableOpacity
      style={styles.button}
      onPress={() => router.push('/notes')}
      >
      <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default HomeScreen;