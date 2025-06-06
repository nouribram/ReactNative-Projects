import { Slot, Stack } from "expo-router";

const  RootLayout = () => {
  return <Stack
  
  screenOptions={{
    headerStyle: {
      backgroundColor: '#151434',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentStyle: {
      paddingHorizontal: 9,
      paddingTop: 10,
      backgroundColor: '#fff',
    }
  }}>
  
  <Stack.Screen name='index' options={{title: 'Home'}} />
  <Stack.Screen name='notes' options={{headerTitle: 'Notes'}} />


  </Stack>
  

}


export default RootLayout;
