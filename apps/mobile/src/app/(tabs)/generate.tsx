import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function GenerateTab() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI generator</Text>
      <Text style={styles.subtitle}>Create a short draft for your next post.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your topic"
        placeholderTextColor="#64748b"
        value={topic}
        onChangeText={setTopic}
      />
      <Pressable style={styles.button} onPress={() => setResult(`Draft for ${topic || 'your topic'}: Launch your product with a simple, confident message that feels clear and helpful.`)}>
        <Text style={styles.buttonText}>Generate draft</Text>
      </Pressable>
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#020617',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#cbd5e1',
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
