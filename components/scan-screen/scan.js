import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {
  ButtonText,
  Container,
  Heading,
  PrimaryButton,
  ScrollContainer,
  SecondaryButton,
  SecondaryButtonText,
  SmallHeading,
} from '../common.styles';

export const Scan = () => {
  const [loadScanner, setLoadScanner] = useState(false);

  const scannerRead = e => {
    setLoadScanner(false);
    const { data } = e;

    console.log('data', data);
  };

  return (
    <Container edges={['top']}>
      <ScrollContainer>
        <Heading>Scan</Heading>
        <SmallHeading>Scan the QR code on the Nuni to get started</SmallHeading>
        <PrimaryButton onPress={() => setLoadScanner(true)}>
          <ButtonText>Scan Nuni</ButtonText>
        </PrimaryButton>
        {loadScanner && (
          <QRCodeScanner
            onRead={scannerRead}
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker
            bottomContent={
              <SecondaryButton onPress={() => setLoadScanner(false)}>
                <SecondaryButtonText>Cancel</SecondaryButtonText>
              </SecondaryButton>
            }
          />
        )}
      </ScrollContainer>
    </Container>
  );
};
