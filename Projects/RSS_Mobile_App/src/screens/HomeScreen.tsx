import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const quickServices = [
    {
      id: 'emergency',
      title: 'Emergency Service',
      icon: 'warning',
      color: '#FF4444',
      onPress: () => navigation.navigate('EmergencyService'),
    },
    {
      id: 'breakdown',
      title: 'Breakdown',
      icon: 'car',
      color: '#FF8800',
      onPress: () => navigation.navigate('ServiceRequest', { type: 'breakdown' }),
    },
    {
      id: 'fuel',
      title: 'Fuel Delivery',
      icon: 'water',
      color: '#00AA00',
      onPress: () => navigation.navigate('ServiceRequest', { type: 'fuel' }),
    },
    {
      id: 'tire',
      title: 'Tire Service',
      icon: 'disc',
      color: '#0088FF',
      onPress: () => navigation.navigate('ServiceRequest', { type: 'tire' }),
    },
    {
      id: 'battery',
      title: 'Battery Jump',
      icon: 'flash',
      color: '#FFDD00',
      onPress: () => navigation.navigate('ServiceRequest', { type: 'battery' }),
    },
    {
      id: 'other',
      title: 'Other Services',
      icon: 'construct',
      color: '#888888',
      onPress: () => navigation.navigate('ServiceRequest', { type: 'other' }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Welcome!</Text>
          <Text style={styles.subtitle}>How can we help you today?</Text>
        </View>

        {/* Emergency Button */}
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => navigation.navigate('EmergencyService')}
        >
          <Ionicons name="warning" size={24} color="white" />
          <Text style={styles.emergencyText}>EMERGENCY SERVICE</Text>
        </TouchableOpacity>

        {/* Quick Services Grid */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Quick Services</Text>
          <View style={styles.servicesGrid}>
            {quickServices.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[styles.serviceCard, { backgroundColor: service.color }]}
                onPress={service.onPress}
              >
                <Ionicons name={service.icon as any} size={32} color="white" />
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Requests */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Requests</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('ServiceHistory')}
          >
            <Text style={styles.viewAllText}>View All</Text>
            <Ionicons name="chevron-forward" size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('BookService')}
          >
            <Ionicons name="calendar" size={24} color="#007AFF" />
            <Text style={styles.actionText}>Book Service</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Ionicons name="person" size={24} color="#007AFF" />
            <Text style={styles.actionText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4444',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  emergencyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  servicesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  serviceTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  recentSection: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#007AFF',
    fontSize: 16,
    marginRight: 5,
  },
  actionsSection: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    minWidth: 100,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
