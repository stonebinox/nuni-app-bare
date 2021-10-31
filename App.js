import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from './components/splash-screen/splash';
import { Login } from './components/login-screen/login';
import { OTP } from './components/otp-screen/otp';
import { HomeScreen } from './components/home-screen/home';
import { Scan } from './components/scan-screen/scan';
import { QRScannerModal } from './components/qr-scanner-modal/qr-scanner';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Group>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="QRScanner"
            component={QRScannerModal}
            options={{
              title: 'Scan Nuni QR',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
