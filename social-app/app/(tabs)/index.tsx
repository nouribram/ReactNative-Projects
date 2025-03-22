import { View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from '../../styles/auth.styles';
import { Link } from "expo-router";


export default function HomeScreen() {
  return (
   <View style={styles.container}>
     <Link href="/notifications">Visit Notifications</Link>
   </View>
  );
}
