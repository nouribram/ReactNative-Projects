import { useState  } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput} from "react-native";

const NoteScreen = () => {

    const [notes, setNotes] = useState([
        {id: '1', Text: 'Note one'},
        {id: '2', Text: 'Note two'},
        {id: '3', Text: 'Note three'},

    ]);
   
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    return( 
    <View style={styles.container}>
        <FlatList 
         data={notes}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
            <View style={styles.noteItem}>
               <Text style={styles.noteText}>{item.text}</Text>
            </View>
         )}
        />

        <TouchableOpacity style={styles.addButton} onPress={ () =>
          setModalVisible(true) }>
           <Text style={styles.addButtonText}>+ Add Note</Text> 
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={modalVisible} animationType='slide' transparent onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
             <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add a new note</Text>
                <TextInput />
             </View>
          </View>
        </Modal>
    </View>
 );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    noteText: {
        fontSize: 18,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NoteScreen;