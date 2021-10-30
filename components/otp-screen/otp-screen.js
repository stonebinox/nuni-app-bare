import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  ScrollContainer,
  Heading,
  Input,
  SecondaryButton,
  ButtonText,
  PrimaryButton,
  SecondaryButtonText,
  Ball,
  BASE_SPACING,
} from '../common.styles';
import Symbol from '../../assets/wave.png';
import {validateOtp} from '../../helpers/api';

const LogoSymbol = styled.Image`
  width: 30%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: -${BASE_SPACING}px;
`;

const BottomRightBall = styled(Ball)`
  bottom: -200px;
  right: -200px;
`;

export const OTPScreen = ({navigation, route}) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    params: {phoneNumber = ''},
  } = route;

  const otpCheck = () => {
    if (loading) return;
    if (otp.trim() === '') {
      Alert.alert('Invalid OTP', 'Please enter an OTP and try again.');
      return;
    }

    setLoading(true);
    const formdata = new FormData();
    formdata.append('phone_number', phoneNumber);
    formdata.append('otp', otp);
    validateOtp(formdata)
      .then(data => data.json())
      .then(async response => {
        setLoading(false);

        if (response.ok) {
          const {
            data: {user_id: userId, user_token: userToken},
          } = response;
          await AsyncStorage.setItem('userId', userId);
          await AsyncStorage.setItem('userToken', userToken);

          navigation.navigate('Search');
        } else {
          const {msg} = response;
          Alert.alert('Error', msg);
        }
      })
      .catch(e => {
        setLoading(false);
        console.error(e);
      });
  };

  return (
    <Container edges={['top']}>
      <ScrollContainer>
        <LogoSymbol source={Symbol} resizeMode="contain" />
        <Heading>ENTER OTP</Heading>
        <Input
          placeholder="OTP"
          secureTextEntry
          keyboardType="number-pad"
          onChangeText={text => setOtp(text)}
        />
        <PrimaryButton onPress={otpCheck}>
          <ButtonText>verify otp</ButtonText>
        </PrimaryButton>
        <SecondaryButton onPress={() => navigation.navigate('Login')}>
          <SecondaryButtonText>change number</SecondaryButtonText>
        </SecondaryButton>
      </ScrollContainer>
      <BottomRightBall />
    </Container>
  );
};
