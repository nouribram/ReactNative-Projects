import { styles } from '@/styles/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import { View, Text} from 'react-native'
import { Colors } from "@/constants/theme";


export default function login() {
    return (
        <View style={styles.container}>
           
           <View style={styles.brandSection}>
              <Ionicons name='leaf' size={32} color={Colors.primary} />
           </View>
           <Text style={styles.appName}>spotLight</Text>
           <Text style={styles.tagline}>do not miss anything</Text>
        </View>
    );
}