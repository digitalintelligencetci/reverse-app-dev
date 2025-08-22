# RSS Mobile App - Roadside Service Mobile Application

A React Native mobile application for roadside service requests, built with TypeScript and integrated with WhatsApp Business API for customer communication.

## 🚗 Features

### Customer Mobile App
- **Emergency Service Requests** - Immediate roadside assistance
- **Service Type Selection** - Breakdown, fuel, tire, battery, and other services
- **Priority Levels** - Low, medium, high, and emergency priorities
- **Location Services** - GPS integration for accurate service location
- **Real-time Updates** - Track service request status
- **WhatsApp Integration** - Receive notifications and updates via WhatsApp

### Service Types
- 🚨 **Emergency Breakdown** - Engine issues, transmission problems
- ⛽ **Fuel Delivery** - Emergency fuel when stranded
- 🚗 **Tire Service** - Flat tire repair and replacement
- 🔋 **Battery Jump** - Dead battery assistance
- 🛠️ **Other Services** - Custom service requests

## 🏗️ Architecture

```
Customer Mobile App (React Native + TypeScript)
    ↓ (API calls)
Django Backend (Employee Dashboard)
    ↓ (WhatsApp Business API)
Customer WhatsApp
```

## 🛠️ Tech Stack

- **Frontend**: React Native with TypeScript
- **Navigation**: React Navigation v6
- **State Management**: React Hooks
- **API Communication**: Axios
- **Icons**: Expo Vector Icons
- **Backend Integration**: Django REST API
- **Messaging**: WhatsApp Business API

## 📱 Screens

1. **Home Screen** - Main dashboard with quick service access
2. **Service Request** - Submit detailed service requests
3. **Emergency Service** - Urgent roadside assistance
4. **Service History** - Track past requests
5. **Bookings** - Scheduled service appointments
6. **Messages** - WhatsApp communication history
7. **Profile** - User account management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd /Users/okshashim/SaasProjects/reverse-app-dev/Projects/RSS_Mobile_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # iOS Simulator
   Press 'i' when server starts
   
   # Android Emulator
   Press 'a' when server starts
   
   # Web Browser
   Press 'w' when server starts
   
   # Phone (Expo Go)
   Scan QR code with Expo Go app
   ```

## 🔧 Configuration

### App Configuration
The `app.json` is configured with:
- iOS bundle identifier: `com.roadside.service.rssmobileapp`
- Android package: `com.roadside.service.rssmobileapp`
- Proper build numbers and version codes

### API Configuration
Update the API base URL in `src/services/api.ts`:
```typescript
const API_BASE_URL = 'http://your-django-server.com/api';
```

### WhatsApp Business API
Configure WhatsApp Business API credentials in your Django backend for sending notifications to customers.

## 📱 App Structure

```
RSS_Mobile_App/
├── src/
│   ├── components/          # Reusable UI components
│   ├── navigation/          # Navigation configuration
│   ├── screens/            # App screens
│   ├── services/           # API services
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── index.ts                # Entry point
└── README.md               # This file
```

## 🔐 Authentication

The app supports user authentication with:
- User registration and login
- JWT token-based authentication
- Secure API communication

## 📍 Location Services

- GPS integration for accurate service location
- Address input with validation
- Real-time location updates

## 📞 Emergency Services

- 24/7 emergency hotline access
- Immediate service request submission
- Priority-based response system

## 💬 WhatsApp Integration

- Automated status updates
- Service confirmation messages
- Emergency notifications
- Two-way communication support

## 🚧 Development Status

- ✅ **Complete App Structure** - Professional React Native setup
- ✅ **Navigation System** - Tab and Stack navigation working
- ✅ **All Screen Components** - 12 screens implemented
- ✅ **Emergency Service** - Full emergency functionality
- ✅ **Service Request System** - Complete request submission
- ✅ **API Service Layer** - WhatsApp and backend integration ready
- ✅ **TypeScript Types** - Full type safety
- ✅ **Beautiful UI/UX** - Professional, responsive design
- ✅ **iOS/Android Ready** - Proper bundle identifiers configured
- ✅ **WhatsApp API Ready** - Service layer implemented
- 🔄 **Backend Integration** - Ready to connect to Django
- 🔄 **Real GPS Location** - Ready for device integration
- 🔄 **Push Notifications** - Ready for implementation

## 🔮 Future Enhancements

- **Real-time Tracking** - Live technician location
- **Payment Integration** - In-app payments
- **Photo Upload** - Vehicle damage documentation
- **Voice Notes** - Audio service descriptions
- **Offline Mode** - Work without internet
- **Multi-language Support** - International markets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@roadside-service.com
- Emergency: 1-800-ROADSIDE
- WhatsApp: +1-800-ROADSIDE

---

**Built with ❤️ for safer roads and better roadside assistance**
