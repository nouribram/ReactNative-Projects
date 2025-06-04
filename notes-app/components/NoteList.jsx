import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator, 
  FlatList 
} from "react-native";

const NoteList = ({notes}) => {
    return (<View>

         <FlatList 
                    data={notes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.noteItem}>
                        <Text style={styles.noteText}>{item.text}</Text>
                        </View>
                    )}
        />

    </View>);
}
 
const styles = StyleSheet.create({
  noteItem: {
    padding: 12,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
    borderRadius: 8,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
});
export default NoteList;