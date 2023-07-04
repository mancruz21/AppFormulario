import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = ({ userType }) => {
  return (
    <View>
      <Text>Bienvenido al panel de {userType === 'admin' ? 'administrador' : 'usuario'}.</Text>
    </View>
  );
};

export default Dashboard;
