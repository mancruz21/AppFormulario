import React from 'react';
import { View, Text } from 'react-native';

const Section = ({ title, children }) => {
  return (
    <View>
      <Text>{title}</Text>
      {children}
    </View>
  );
};

export default Section;
