import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { serviceRequestService } from '../services/api';
import { ServiceRequest } from '../types';

const ServiceRequestScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const serviceType = route.params?.type || 'other';

  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | 'emergency'>('medium');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priorityOptions = [
    { value: 'low', label: 'Low', color: '#00AA00' },
    { value: 'medium', label: 'Medium', color: '#FF8800' },
    { value: 'high', label: 'High', color: '#FF4444' },
    { value: 'emergency', label: 'Emergency', color: '#FF0000' },
  ];

  const getServiceTypeInfo = () => {
    const types = {
      breakdown: { title: 'Breakdown Service', icon: 'car', color: '#FF8800' },
      fuel: { title: 'Fuel Delivery', icon: 'water', color: '#00AA00' },
      tire: { title: 'Tire Service', icon: 'disc', color: '#0088FF' },
      battery: { title: 'Battery Jump', icon: 'flash', color: '#FFDD00' },
      other: { title: 'Other Service', icon: 'construct', color: '#888888' },
    };
    return types[serviceType] || types.other;
  };

  const handleSubmit = async () => {
    if (!description.trim() || !address.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const requestData: Partial<ServiceRequest> = {
        serviceType,
        description: description.trim(),
        priority,
        location: {
          latitude: 0, // Will be updated with actual GPS coordinates
          longitude: 0,
          address: address.trim(),
        },
      };

      const response = await serviceRequestService.create(requestData);
      Alert.alert(
        'Success',
        'Your service request has been submitted successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('ServiceHistory'),
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to submit service request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceInfo = getServiceTypeInfo();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: serviceInfo.color }]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Ionicons name={serviceInfo.icon as any} size={32} color="white" />
            <Text style={styles.headerTitle}>{serviceInfo.title}</Text>
          </View>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Service Type Display */}
          <View style={styles.serviceTypeDisplay}>
            <Text style={styles.label}>Service Type</Text>
            <View style={[styles.serviceTypeCard, { backgroundColor: serviceInfo.color }]}>
              <Ionicons name={serviceInfo.icon as any} size={24} color="white" />
              <Text style={styles.serviceTypeText}>{serviceInfo.title}</Text>
            </View>
          </View>

          {/* Priority Selection */}
          <View style={styles.prioritySection}>
            <Text style={styles.label}>Priority Level</Text>
            <View style={styles.priorityOptions}>
              {priorityOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.priorityOption,
                    priority === option.value && { backgroundColor: option.color },
                  ]}
                  onPress={() => setPriority(option.value as any)}
                >
                  <Text
                    style={[
                      styles.priorityText,
                      priority === option.value && { color: 'white' },
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Description */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Description *</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Describe your issue or service needed..."
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Address */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Location/Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your current location or address"
              value={address}
              onChangeText={setAddress}
            />
            <TouchableOpacity style={styles.locationButton}>
              <Ionicons name="location" size={20} color="#007AFF" />
              <Text style={styles.locationButtonText}>Use Current Location</Text>
            </TouchableOpacity>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Text style={styles.submitButtonText}>Submitting...</Text>
            ) : (
              <Text style={styles.submitButtonText}>Submit Request</Text>
            )}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  form: {
    padding: 20,
  },
  serviceTypeDisplay: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  serviceTypeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  serviceTypeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  prioritySection: {
    marginBottom: 20,
  },
  priorityOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  priorityOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#DDD',
    backgroundColor: 'white',
  },
  priorityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  inputSection: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
    height: 100,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  locationButtonText: {
    color: '#007AFF',
    fontSize: 14,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#999',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServiceRequestScreen;
