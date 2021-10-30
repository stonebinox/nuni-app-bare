import React, {useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

import {
  BASE_SPACING,
  colors,
  PrimaryButton,
  ButtonText,
  SmallHeading,
} from '../common.styles';

const NuniContainer = styled.View`
  width: 90%;
  margin: 0 auto;
  padding-bottom: ${BASE_SPACING}px;
  border-bottom-width: 3px;
  border-bottom-color: ${colors.lightestGrey};
  border-radius: 4px;
`;

export const Nuni = ({nuni}) => {
  const [active, setActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const {
    nuni: {activation_url, deactivation_url},
    client: {name, address},
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
    <NuniContainer>
      <SmallHeading>
        At {name}, {address}
      </SmallHeading>
      <PrimaryButton onPress={handleNuni}>
        <ButtonText>{active ? 'Deactivate' : 'Activate'}</ButtonText>
      </PrimaryButton>
    </NuniContainer>
  );
};
