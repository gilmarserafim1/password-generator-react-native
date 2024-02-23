import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './LogoStyles';

const Logo = () => {
  return (
    <View>           
        <Text style={styles.container}>
            Password Generator
        </Text>
    </View>
    
  );
}

export default Logo;