import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { MainLogo } from '../../components';
import styles from './styles';

class SplashScreen extends React.Component {
  componentDidMount() {
    this.navigateToApp();
  }

  navigateToApp = async () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <MainLogo />
        <ActivityIndicator />
      </View>
    );
  }
}

export default SplashScreen;
