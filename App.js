// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './screens/StartScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
// import Colors from './commponents/constants/colors';

const background = require("./assets/background.png");

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  const handlePickedNumber = (number) => {
    console.log(number)
    setPickedNumber(number);
  }

  const handleGmaeOver = () => {
    setGameOver(true);
  }
  let screen = <StartScreen setNumber={handlePickedNumber} />;

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={handleGmaeOver} />
  };
  if (gameOver) {
    screen = <GameOverScreen />
  }
  // console.log(Platform.__constants.Fingerprint)
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground source={background} resizeMode="cover" style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.screen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // padding: 24
  },
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    opacity: 0.15
  }
});
