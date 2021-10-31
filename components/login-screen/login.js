import React, { useState } from 'react';
import styled from 'styled-components/native';

import {
  Container,
  ScrollContainer,
  Heading,
  Input,
  ButtonText,
  PrimaryButton,
  Ball,
  BASE_SPACING,
  DOUBLE_SPACING,
} from '../common.styles';
import { authenticate } from '../../helpers/api';

import Symbol from '../../assets/wave.png';
import { Alert } from 'react-native';
import { Loader } from '../common/loader';

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

const LoginHeading = styled(Heading)`
  margin-bottom: ${DOUBLE_SPACING + BASE_SPACING * 1.5}px;
  margin-top: 0;
`;

export const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const authenticateUser = () => {
    if (loading) return;
    if (phoneNumber.length < 10 || isNaN(phoneNumber)) {
      Alert.alert(
        'Invalid phone number',
        'Please verify your phone number and try again.',
      );
      return;
    }

    setLoading(true);
    const formdata = new FormData();
    formdata.append('phone_number', phoneNumber);

    authenticate(formdata)
      .then(response => response.json())
      .then(data => {
        setLoading(false);

        if (data.ok) {
          navigation.navigate('OTP', {
            phoneNumber,
          });
        } else {
          const { msg } = data;
          Alert.alert('Error', msg);
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <Container edges={['top']}>
      <ScrollContainer>
        <LogoSymbol source={Symbol} resizeMode="contain" />
        <LoginHeading>LOGIN</LoginHeading>
        <Input
          placeholder="Phone number"
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={text => setPhoneNumber(text)}
        />
        <PrimaryButton onPress={authenticateUser}>
          <ButtonText>get otp</ButtonText>
        </PrimaryButton>
        {loading && <Loader />}
      </ScrollContainer>
      <BottomRightBall />
    </Container>
  );
};
