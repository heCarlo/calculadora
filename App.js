import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (value) => {
    if (value === 'C') return clearDisplay();
    if (value === '=') return calculateResult();
    if (value === '←') return removeLastDigit();
    setDisplayValue(displayValue === '0' ? value : displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setOperator(null);
  };

  const calculateResult = () => {
    setDisplayValue(eval(displayValue).toString());
    setOperator(null);
  };

  const removeLastDigit = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttons}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+', '←'].map((button) => (
          <Button
            key={button}
            label={button}
            onPress={() => handleButtonPress(button)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 40,
    color: '#fff',
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
