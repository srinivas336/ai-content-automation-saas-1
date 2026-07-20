import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function MobileHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SaaS Bootcamp Mobile</Text>
      <Text style={styles.subtitle}>Generate content, manage drafts, and review analytics from your phone.</Text>
      <Link href="/generate" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open Generator</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
