import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function MobileGenerateScreen() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a topic"
        placeholderTextColor="#64748b"
        value={topic}
        onChangeText={setTopic}
      />
      <Pressable style={styles.button} onPress={() => setResult(`Draft for ${topic || 'your topic'}`)}>
        <Text style={styles.buttonText}>Generate draft</Text>
      </Pressable>
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#020617',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    padding: 12,
    color: 'white',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  result: {
    marginTop: 16,
    color: '#e2e8f0',
    lineHeight: 22,
  },
});
