import { View } from "react-native";
 
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
 
export default NoteList;