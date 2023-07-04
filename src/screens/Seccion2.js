import React from 'react';
import { View, Text } from 'react-native';
import Section from './Section';

const App = () => {
  return (
    <View>
      <Section title="Sección 1">
        <Text>Pregunta 1</Text>
        <Text>Pregunta 2</Text>
        {/* Agrega más preguntas o componentes aquí */}
      </Section>
      <Section title="Sección 2">
        <Text>Pregunta 3</Text>
        <Text>Pregunta 4</Text>
        {/* Agrega más preguntas o componentes aquí */}
      </Section>
      {/* Agrega más secciones aquí */}
    </View>
  );
};

export default App;
