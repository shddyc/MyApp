import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';

export default function App() {
  const manejarContacto = () => {
    Alert.alert(
      '📧 Contacto',
      '¡Gracias por tu interés!\n\nPuedes escribirme a:\nshadday.campusanomontero@gmail.com'
    );
  };

  const manejarPortafolio = () => {
    Alert.alert(
      '🌐 Mi Portafolio',
      'Próximamente: aun en progreso :)'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.photoContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/85322063?v=4',
            }}
            style={styles.photo}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            Shadday Campusano
          </Text>

          <Text style={styles.title}>
            Estudiante de Desarrollo de Software
          </Text>

          <Text style={styles.bio}>
            🚀 Apasionado por el desarrollo web y móvil.
            {'\n'}
            💻 Experiencia con HTML, CSS, JavaScript y React Native.
            {'\n'}
            🎯 Mi meta es crear aplicaciones útiles y profesionales.
          </Text>
        </View>

        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>
            Mis habilidades
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🌐 HTML</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🎨 CSS</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚡ JavaScript</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚛️ React Native</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🗄️ SQL Server</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🐳 Docker</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Pressable
            style={styles.buttonPrimary}
            onPress={manejarContacto}
          >
            <Text style={styles.buttonPrimaryText}>
              📩 Contáctame
            </Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={manejarPortafolio}
          >
            <Text style={styles.buttonSecondaryText}>
              🌐 Mi Portafolio
            </Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creado con ❤️ en Expo Snack
            {'\n'}
            📅 {new Date().getFullYear()}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 60,
    paddingBottom: 80,
  },

  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#2196F3',
  },

  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },

  title: {
    fontSize: 18,
    color: '#2196F3',
    fontWeight: '600',
    marginBottom: 12,
  },

  bio: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 22,
  },

  skillsContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },

  badge: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontSize: 14,
    color: '#444444',
    fontWeight: '500',
  },

  actionsContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 50,
  },

  buttonPrimary: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
  },

  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2196F3',
    alignItems: 'center',
  },

  buttonSecondaryText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 30,
  },

  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});