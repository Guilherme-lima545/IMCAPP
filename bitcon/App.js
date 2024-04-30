import { StyleSheet, View } from 'react-native';
import Tittle from './src/components/title';
import Form from './src/components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Tittle> 
        
      </Tittle>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
