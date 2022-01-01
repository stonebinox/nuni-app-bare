import React from 'react';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { SecondaryButton, SecondaryButtonText } from '../common.styles';

export const QRScannerModal = ({ navigation, route }) => {
  const {
    params: { getNuniInfo },
  } = route;

  const scannerRead = e => {
    const { data } = e;
    getNuniInfo(data);

    navigation.goBack();
  };

  return (
    <QRCodeScanner
      onRead={scannerRead}
      flashMode={RNCamera.Constants.FlashMode.auto}
      showMarker
      bottomContent={
        <SecondaryButton onPress={() => navigation.goBack()}>
          <SecondaryButtonText>cancel</SecondaryButtonText>
        </SecondaryButton>
      }
    />
  );
};
