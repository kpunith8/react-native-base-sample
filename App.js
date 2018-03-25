import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import { Container } from 'native-base';

console.ignoredYellowBox = ['Warning:'];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

  }
  render() {
    return(
      <Container>
        <MainStackNavigator />
      </Container>
    );

  }
}


const MainStackNavigator = StackNavigator({
  Home: { screen: Home },
})

export default App;