import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import { getNuniClient } from '../../helpers/api';

import {
  ButtonText,
  Container,
  Heading,
  PrimaryButton,
  ScrollContainer,
  SmallHeading,
  BASE_SPACING,
} from '../common.styles';
import { Loader } from '../common/loader';

const ScanSubtitle = styled(SmallHeading)`
  margin-bottom: ${BASE_SPACING}px;
`;

export const Scan = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const getNuniInfo = data => {
    if (data.indexOf('nuni-') === 0) {
      const nuniClientId = data.replace('nuni-', '');
      const formdata = new FormData();
      formdata.append('nuni_client_id', nuniClientId);
      setLoading(true);

      getNuniClient(formdata)
        .then(response => response.json())
        .then(data => {
          setLoading(false);

          if (data.ok) {
            const { data: nuniData } = data;
            navigation.navigate('Nuni', {
              nuni: nuniData,
            });
          } else {
            Alert.alert('Error', data.msg);
          }
        })
        .catch(e => {
          setLoading(false);
          console.log(e);
          Alert.alert('Error', 'Something went wrong. Try again later.');
        });
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
        <Heading>SCAN</Heading>
        <ScanSubtitle>Scan the QR code on the Nuni to get started</ScanSubtitle>
        {loading ? (
          <Loader />
        ) : (
          <PrimaryButton
            onPress={() =>
              navigation.navigate('QRScanner', {
                getNuniInfo,
              })
            }>
            <ButtonText>scan nuni</ButtonText>
          </PrimaryButton>
        )}
      </ScrollContainer>
    </Container>
  );
};
