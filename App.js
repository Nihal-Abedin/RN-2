import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './screens/StartScreen';

const background = require("./assets/background.png");

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground source={background} resizeMode="cover" style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <StartScreen />

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
