import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';


const TipoIdentificacionSection = () => {
  const [selectedTipoIdentificacion, setSelectedTipoIdentificacion] = useState('');

  // Función para manejar el cambio de selección
  const handleTipoIdentificacionSelection = (tipoIdentificacion) => {
    setSelectedTipoIdentificacion(tipoIdentificacion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un tipo de identificación:</Text>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'TI'}
           onPress={() => handleTipoIdentificacionSelection('TI')}
        />
        <Text style={styles.optionText}>TI Tarjeta de Identidad (10 a 17 años)</Text>
      </View>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'CC'}
           onPress={() => handleTipoIdentificacionSelection('CC')}
        />
        <Text style={styles.optionText}>CC Cédula de Ciudadanía</Text>
      </View>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'CE'}
           onPress={() => handleTipoIdentificacionSelection('CE')}
        />
        <Text style={styles.optionText}>CE Cédula de Extranjería</Text>
      </View>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'PA'}
           onPress={() => handleTipoIdentificacionSelection('PA')}
        />
        <Text style={styles.optionText}>PA Pasaporte</Text>
      </View>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'PEP'}
           onPress={() => handleTipoIdentificacionSelection('PEP')}
        />
        <Text style={styles.optionText}>PEP Permiso Especial de Permanencia</Text>
      </View>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'SinIdentificacion'}
           onPress={() => handleTipoIdentificacionSelection('SinIdentificacion')}
        />
        <Text style={styles.optionText}>Adulto sin Identificación (no tiene)</Text>
      </View>

      <View style={styles.optionContainer}>
        <CheckBox
           checked={selectedTipoIdentificacion === 'Anonimo'}
           onPress={() => handleTipoIdentificacionSelection('Anonimo')}
        />
        <Text style={styles.optionText}>Adulto sin Identificación (participa como anónimo)</Text>
      </View>

      <Text style={styles.selectedOptionText}>Tipo de identificación seleccionado: {selectedTipoIdentificacion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 8,
  },
  selectedOptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10
},
});

export default TipoIdentificacionSection;