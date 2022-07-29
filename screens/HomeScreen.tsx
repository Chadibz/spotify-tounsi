import { StyleSheet ,Text, View} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Colors from '../constants/Colors';

import { RootTabScreenProps } from '../types';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={{color:'white'}}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
