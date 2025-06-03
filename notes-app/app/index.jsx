import { Text, View, StyleSheet } from "react-native";

const HomeScreen =() => {
  return (
    <View style={ styles.constainer }>
      <Text>Edit app</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;