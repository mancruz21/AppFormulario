import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';


const HealthConditionsSection = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: 'Oír la voz o los sonidos' },
    { id: 2, label: 'Hablar o conversar' },
    { id: 3, label: 'Ver de cerca, de lejos o alrededor' },
    { id: 4, label: 'Mover el cuerpo, caminar, subir o bajar escaleras' },
    { id: 5, label: 'Agarrar o mover objetos con las manos' },
    { id: 6, label: 'Entender, recordar o tomar decisiones por sí mismo/a' },
    { id: 7, label: 'Comer, vestirse o bañarse por sí mismo/a' },
    { id: 8, label: 'Relacionarse o interactuar con los demás (salud mental)' },
    { id: 9, label: 'Hacer las tareas diarias sin mostrar problemas cardiacos respiratorios o renales' },
  ];

  const handleOptionSelect = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  return (
    <View>
      <Text>Condiciones de salud:</Text>
      {options.map((option) => (
        <View key={option.id}>
          <CheckBox
            value={selectedOptions.includes(option.id)}
            onValueChange={() => handleOptionSelect(option.id)}
          />
          <Text>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default HealthConditionsSection;
