import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { serviceRequestService } from '../services/api';

const EmergencyServiceScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isCalling, setIsCalling] = useState(false);

  const emergencyServices = [
    {
      id: 'breakdown',
      title: 'Vehicle Breakdown',
      description: 'Engine won\'t start, transmission issues',
      icon: 'car',
      color: '#FF4444',
    },
    {
      id: 'accident',
      title: 'Accident Assistance',
      description: 'Collision, vehicle damage',
      icon: 'warning',
      color: '#FF0000',
    },
    {
      id: 'medical',
      title: 'Medical Emergency',
      description: 'Health issues, injury',
      icon: 'medical',
      color: '#FF0000',
    },
    {
      id: 'fuel',
      title: 'Out of Fuel',
      description: 'Emergency fuel delivery',
      icon: 'water',
      color: '#FF8800',
    },
    {
      id: 'tire',
      title: 'Flat Tire',
      description: 'Tire replacement, repair',
      icon: 'disc',
      color: '#FF8800',
    },
    {
      id: 'battery',
      title: 'Dead Battery',
      description: 'Jump start, battery replacement',
      icon: 'flash',
      color: '#FFDD00',
    },
  ];

  const handleEmergencyCall = async (serviceType: string) => {
    Alert.alert(
      'Emergency Service',
      'This will immediately contact our emergency response team. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call Emergency',
          style: 'destructive',
          onPress: async () => {
            setIsCalling(true);
            try {
              // Create emergency service request
              const emergencyRequest = {
                serviceType,
                priority: 'emergency' as const,
                description: `EMERGENCY: ${serviceType} service needed immediately`,
                location: {
                  latitude: 0, // Will be updated with GPS
                  longitude: 0,
                  address: 'Current Location',
                },
              };

              await serviceRequestService.create(emergencyRequest);
              
              Alert.alert(
                'Emergency Request Sent',
                'Our emergency response team has been notified and will contact you immediately.',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('ServiceHistory'),
                  },
                ]
              );
            } catch (error) {
              Alert.alert('Error', 'Failed to send emergency request. Please try calling directly.');
            } finally {
              setIsCalling(false);
            }
          },
        },
      ]
    );
  };

  const handleDirectCall = () => {
    Alert.alert(
      'Emergency Contact',
      'Call our 24/7 emergency hotline directly?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call Now',
          onPress: () => {
            // In a real app, this would use Linking to make a phone call
            Alert.alert('Call', 'Emergency hotline: 1-800-ROADSIDE');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Emergency Header */}
        <View style={styles.emergencyHeader}>
          <Ionicons name="warning" size={48} color="white" />
          <Text style={styles.emergencyTitle}>EMERGENCY SERVICE</Text>
          <Text style={styles.emergencySubtitle}>
            24/7 Immediate Response Available
          </Text>
        </View>

        {/* Direct Emergency Call */}
        <TouchableOpacity
          style={styles.directCallButton}
          onPress={handleDirectCall}
        >
          <Ionicons name="call" size={24} color="white" />
          <Text style={styles.directCallText}>CALL EMERGENCY HOTLINE</Text>
        </TouchableOpacity>

        {/* Emergency Services */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Select Emergency Type</Text>
          {emergencyServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.emergencyCard, { borderLeftColor: service.color }]}
              onPress={() => handleEmergencyCall(service.id)}
              disabled={isCalling}
            >
              <View style={styles.serviceInfo}>
                <Ionicons name={service.icon as any} size={32} color={service.color} />
                <View style={styles.serviceText}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text style={styles.serviceDescription}>{service.description}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Safety Information */}
        <View style={styles.safetySection}>
          <Text style={styles.safetyTitle}>Safety First</Text>
          <Text style={styles.safetyText}>
            • Move to a safe location if possible{'\n'}
            • Turn on hazard lights{'\n'}
            • Stay in your vehicle if on highway{'\n'}
            • Keep emergency kit accessible
          </Text>
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
  emergencyHeader: {
    backgroundColor: '#FF0000',
    padding: 30,
    alignItems: 'center',
  },
  emergencyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
  },
  emergencySubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    textAlign: 'center',
  },
  directCallButton: {
    backgroundColor: '#FF4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  directCallText: {
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
  emergencyCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  serviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  serviceText: {
    marginLeft: 15,
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  safetySection: {
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
  },
  safetyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  safetyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default EmergencyServiceScreen;
