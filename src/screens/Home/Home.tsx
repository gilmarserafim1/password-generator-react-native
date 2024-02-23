import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HomeStyles';
import Logo from '../../components/Logo/Logo';
import Generator from '../../components/Generator/Generator';

const Home = () => {
  return (
    <View style={styles.container}>
        <Logo/>
        <Generator/>
    </View>
  );
}

export default Home;


