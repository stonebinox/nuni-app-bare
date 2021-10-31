import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import {
  BASE_SPACING,
  colors,
  PrimaryButton,
  ButtonText,
  Heading,
  Container,
} from '../common.styles';

const NuniContainer = styled.View`
  width: 100%;
  margin: 0 auto;
`;

export const Nuni = ({ navigation, route }) => {
  const {
    params: { nuni },
  } = route;
  const [active, setActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const {
    nuni: { activation_url, deactivation_url },
    client: { name, address },
  } = nuni;

  const handleNuni = () => {
    if (!buttonActive) {
      setButtonActive(true);
      const url = active ? deactivation_url : activation_url;

      fetch(url, {
        method: 'GET',
      })
        .then(response => response.text())
        .then(data => {
          setActive(!active);
          setButtonActive(false);
        })
        .catch(e => {
          setActive(false);
          setButtonActive(false);
          Alert.alert(
            'Error',
            'Something went wrong. Try again in a few seconds.',
          );
          console.error(e);
        });
    }
  };

  return (
    <Container edges={['top']}>
      <NuniContainer>
        <Heading>
          {name}, {address}
        </Heading>
        <PrimaryButton onPress={handleNuni}>
          <ButtonText>
            {active ? 'Deactivate Nuni' : 'Activate Nuni'}
          </ButtonText>
        </PrimaryButton>
      </NuniContainer>
    </Container>
  );
};
