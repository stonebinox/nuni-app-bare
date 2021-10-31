import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';

import {
  ButtonText,
  Container,
  Heading,
  PrimaryButton,
  ScrollContainer,
  SmallHeading,
  BASE_SPACING,
} from '../common.styles';

const ScanSubtitle = styled(SmallHeading)`
  margin-bottom: ${BASE_SPACING}px;
`;

export const Scan = ({ navigation }) => {
  const getNuniInfo = data => {
    if (data.indexOf('nuni-') === 0) {
      const nuniId = data.replace('nuni-', '');
      console.log('nuni', nuniId);
    } else {
      Alert.alert(
        'Invalid QR',
        'This QR is not a valid Nuni QR. Please verify and try again.',
      );
    }
  };

  return (
    <Container edges={['top']}>
      <ScrollContainer>
        <Heading>Scan</Heading>
        <ScanSubtitle>Scan the QR code on the Nuni to get started</ScanSubtitle>
        <PrimaryButton
          onPress={() =>
            navigation.navigate('QRScanner', {
              getNuniInfo,
            })
          }>
          <ButtonText>Scan Nuni</ButtonText>
        </PrimaryButton>
      </ScrollContainer>
    </Container>
  );
};
