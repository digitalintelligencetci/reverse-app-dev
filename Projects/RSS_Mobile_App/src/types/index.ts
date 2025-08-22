export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

export interface ServiceRequest {
  id: string;
  userId: string;
  serviceType: 'breakdown' | 'fuel' | 'tire' | 'battery' | 'other';
  description: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  createdAt: Date;
  estimatedArrival?: Date;
  assignedTechnician?: string;
  price?: number;
}

export interface Technician {
  id: string;
  name: string;
  phone: string;
  specialties: string[];
  rating: number;
  isAvailable: boolean;
  currentLocation?: {
    latitude: number;
    longitude: number;
  };
}

export interface Booking {
  id: string;
  serviceRequestId: string;
  userId: string;
  technicianId?: string;
  scheduledTime: Date;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
  price?: number;
}

export interface WhatsAppMessage {
  to: string;
  message: string;
  type: 'text' | 'image' | 'document';
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read' | 'failed';
}
