import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Seccion1 = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion('');
  };

  return (
    <View>
      {questions.map((question, index) => (
        <Text key={index}>{question}</Text>
      ))}
      <TextInput
        value={currentQuestion}
        onChangeText={setCurrentQuestion}
        placeholder="Enter a question"
      />
      <Button onPress={handleAddQuestion} title="Add Question" />
    </View>
  );
};

export default Seccion1;
