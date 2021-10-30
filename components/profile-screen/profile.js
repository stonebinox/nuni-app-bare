import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Container,
  Heading,
  ScrollContainer,
  SecondaryButton,
  SecondaryButtonText,
} from '../common.styles';

export const Profile = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.clear();

    navigation.replace('Splash');
  };

  return (
    <Container edges={['top']}>
      <ScrollContainer>
        <Heading>Profile</Heading>
        <SecondaryButton onPress={logout}>
          <SecondaryButtonText>Log out</SecondaryButtonText>
        </SecondaryButton>
      </ScrollContainer>
    </Container>
  );
};
