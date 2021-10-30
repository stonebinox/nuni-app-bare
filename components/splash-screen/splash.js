import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from '../../assets/nuni-black.png';
import Symbol from '../../assets/wave.png';

import {Ball, colors} from '../common.styles';

const SplashContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  overflow: hidden;
`;

const LogoContainer = styled.Image`
  width: 50%;
  height: 100px;
  margin: 0 auto;
  margin-top: -50px;
`;

const LogoSymbol = styled.Image`
  width: 30%;
  height: 100px;
  margin: 0 auto;
  margin-top: 80%;
`;

const LeftBall = styled(Ball)`
  left: -200px;
  top: -200px;
`;

const RightBall = styled(Ball)`
  bottom: -200px;
  right: -200px;
`;

export const Splash = ({navigation}) => {
  const navigateLogin = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      navigateLogin();
    }, 5000);
  }, []);

  return (
    <SplashContainer>
      <LeftBall />
      <RightBall />
      <LogoSymbol source={Symbol} resizeMode="contain" />
      <LogoContainer source={Logo} resizeMode="contain" />
    </SplashContainer>
  );
};
